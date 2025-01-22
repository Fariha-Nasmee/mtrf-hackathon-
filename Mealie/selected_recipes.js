// Function to remove a recipe from selected list. Need to fix the formation of the cards
function removeFromSelectedRecipes(recipeId) {
    
    let selectedRecipes = JSON.parse(localStorage.getItem("selectedRecipes")) || [];
    
    
    const updatedRecipes = selectedRecipes.filter(recipe => recipe.id !== recipeId);
    
    
    localStorage.setItem("selectedRecipes", JSON.stringify(updatedRecipes));
    
    
    displaySelectedRecipes(updatedRecipes);
}


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
}

// Function to display selected recipes
function displaySelectedRecipes(recipes) {
    const selectedRecipesContainer = document.getElementById("selectedRecipes");
    selectedRecipesContainer.innerHTML = "";

    if (recipes.length === 0) {
        selectedRecipesContainer.innerHTML = `<div class="col-12"><p>No recipes selected.</p></div>`;
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
            <div class="card recipe-card mb-4">
                <img src="${recipe.image}" class="card-img-top img-fluid" alt="${recipe.title}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <p class="card-text"><strong>Nutrition:</strong> ${recipe.nutrition}</p>
                    <p class="card-text"><strong>Budget:</strong> ${recipe.budget} TK</p>
                    <button class="btn btn-danger" onclick="removeFromSelectedRecipes(${recipe.id})">Remove</button>
                </div>
            </div>
        `;
        selectedRecipesContainer.appendChild(card);
    });

    calculateTotals(recipes);
}

document.addEventListener("DOMContentLoaded", () => {
    const selectedRecipes = JSON.parse(localStorage.getItem("selectedRecipes")) || [];
    
    
    displaySelectedRecipes(selectedRecipes);
});
