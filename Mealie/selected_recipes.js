document.addEventListener("DOMContentLoaded", () => {
    let selectedRecipes = JSON.parse(localStorage.getItem("selectedRecipes")) || [];
    const selectedRecipesContainer = document.getElementById("selectedRecipes");

    
    function removeFromSelectedRecipes(recipeId) {
        selectedRecipes = selectedRecipes.filter(recipe => recipe.id !== recipeId);
        localStorage.setItem("selectedRecipes", JSON.stringify(selectedRecipes));
        displaySelectedRecipes(selectedRecipes);
    }

   
    function showRecipeDetails(recipe) {
        document.getElementById("recipeModalTitle").innerText = recipe.title;
        document.getElementById("recipeModalImage").src = recipe.image;
        document.getElementById("recipeModalDescription").innerText = recipe.description;
        document.getElementById("recipeModalNutrition").innerText = recipe.nutrition;
        document.getElementById("recipeModalBudget").innerText = `${recipe.budget} TK`;

        
        $('#recipeModal').modal('show');
    }

    // Function to calculate totals
    function calculateTotals(recipes) {
        let totalCalories = 0;
        let totalProtein = 0;
        let totalCarbs = 0;
        let totalFat = 0;
        let totalBudget = 0;

        recipes.forEach(recipe => {
            const nutrition = recipe.nutrition.match(/(\d+)/g).map(Number);
            totalCalories += nutrition[0];
            totalProtein += nutrition[1];
            totalCarbs += nutrition[2];
            totalFat += nutrition[3];
            totalBudget += recipe.budget;
        });

        document.getElementById("totalNutrition").innerHTML = `
            <strong>Calories:</strong> ${totalCalories} kcal<br>
            <strong>Protein:</strong> ${totalProtein} g<br>
            <strong>Carbs:</strong> ${totalCarbs} g<br>
            <strong>Fat:</strong> ${totalFat} g<br>
            <strong>Total Budget:</strong> ${totalBudget} TK
        `;

        // Get user-defined target values
        const targetCalories = parseInt(document.getElementById("targetCalories").value, 10) || 5000;
        const targetBudget = parseInt(document.getElementById("targetBudget").value, 10) || 10000;

        // Update the progress bars
        updateProgressBar('calorieProgressBar', totalCalories, targetCalories);
        updateProgressBar('budgetProgressBar', totalBudget, targetBudget);
    }

    // Function to display recipes by category
    function displayRecipesByCategory(recipes, category) {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('col-12', 'mt-4');
        categoryContainer.innerHTML = `<h3>${category}</h3>`;
        selectedRecipesContainer.appendChild(categoryContainer);

        const categoryRow = document.createElement('div');
        categoryRow.classList.add('row');

        const categoryRecipes = recipes.filter(recipe => recipe.meal.toLowerCase() === category.toLowerCase());
        if (categoryRecipes.length === 0) {
            categoryRow.innerHTML = `<div class="col-12"><p>No recipes selected for ${category}.</p></div>`;
        } else {
            categoryRecipes.forEach(recipe => {
                const card = document.createElement("div");
                card.classList.add("col-md-4", "animate__animated", "animate__fadeInUp");
                card.innerHTML = `
                    <div class="card recipe-card mb-4">
                        <img src="${recipe.image}" class="card-img-top img-fluid" alt="${recipe.title}">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text">${recipe.description}</p>
                            <p class="card-text"><strong>Nutrition:</strong> ${recipe.nutrition}</p>
                            <p class="card-text"><strong>Budget:</strong> ${recipe.budget} TK</p>
                            <button class="btn btn-info" data-id="${recipe.id}">View Details</button>
                            <button class="btn btn-danger" data-id="${recipe.id}">Remove</button>
                        </div>
                    </div>
                `;
                categoryRow.appendChild(card);
            });
        }

        selectedRecipesContainer.appendChild(categoryRow);
    }

    
    function displaySelectedRecipes(recipes) {
        selectedRecipesContainer.innerHTML = "";

        if (recipes.length === 0) {
            selectedRecipesContainer.innerHTML = `<div class="col-12"><p>No recipes selected.</p></div>`;
            return;
        }

      
        displayRecipesByCategory(recipes, 'Breakfast');
        displayRecipesByCategory(recipes, 'Lunch');
        displayRecipesByCategory(recipes, 'Dinner');

        calculateTotals(recipes);

        
        document.querySelectorAll('.btn-danger').forEach(button => {
            button.addEventListener('click', event => {
                const recipeId = parseInt(event.target.getAttribute('data-id'), 10);
                removeFromSelectedRecipes(recipeId);
            });
        });

        document.querySelectorAll('.btn-info').forEach(button => {
            button.addEventListener('click', event => {
                const recipeId = parseInt(event.target.getAttribute('data-id'), 10);
                const recipe = selectedRecipes.find(r => r.id === recipeId);
                showRecipeDetails(recipe);
            });
        });
    }

    
    function updateProgressBar(elementId, actualValue, targetValue) {
        const progressBar = document.getElementById(elementId);
        const percentage = Math.min((actualValue / targetValue) * 100, 100);
        progressBar.style.width = percentage + '%';
        progressBar.innerText = `${actualValue} / ${targetValue}`;
    }

   
    displaySelectedRecipes(selectedRecipes);

    
    if (!document.getElementById("calorieProgressBar")) {
        document.getElementById('totalNutrition').insertAdjacentHTML('afterend', `
            <div class="progress mt-3">
                <div id="calorieProgressBar" class="progress-bar bg-info" role="progressbar" style="width: 0;" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress mt-3">
                <div id="budgetProgressBar" class="progress-bar bg-success" role="progressbar" style="width: 0;" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `);
    }

    
    document.getElementById('targetCalories').addEventListener('input', () => calculateTotals(selectedRecipes));
    document.getElementById('targetBudget').addEventListener('input', () => calculateTotals(selectedRecipes));
});