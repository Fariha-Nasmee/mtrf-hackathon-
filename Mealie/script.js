document.addEventListener("DOMContentLoaded", () => {
    "use strict"; 

    const recipes = [
        {
            id: 1,
            title: "Healthy Breakfast",
            description: "Start your day with a healthy breakfast rich in nutrients.",
            image: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7",
            diet: "none",
            meal: "breakfast",
            difficulty: "easy",
            ingredients: ["2 eggs", "1 avocado", "1 slice of whole grain bread", "Salt", "Pepper"],
            instructions: [
                "Boil the eggs.",
                "Toast the bread.",
                "Mash the avocado and spread it on the toast.",
                "Add boiled eggs on top.",
                "Season with salt and pepper.",
            ],
            nutrition: "Calories: 300, Protein: 20g, Carbs: 30g, Fat: 15g",
        },
        {
            id: 2,
            title: "Vegan Salad",
            description: "A refreshing and nutritious vegan salad.",
            image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f0b9",
            diet: "vegan",
            meal: "lunch",
            difficulty: "easy",
            ingredients: [
                "1 cup mixed greens",
                "1/2 cup cherry tomatoes",
                "1/4 cup sliced cucumbers",
                "1/4 cup shredded carrots",
                "2 tbsp olive oil",
                "1 tbsp balsamic vinegar",
                "Salt",
                "Pepper",
            ],
            instructions: [
                "Combine the mixed greens, cherry tomatoes, cucumbers, and carrots in a bowl.",
                "Drizzle with olive oil and balsamic vinegar.",
                "Season with salt and pepper to taste.",
                "Toss well and serve.",
            ],
            nutrition: "Calories: 150, Protein: 2g, Carbs: 10g, Fat: 12g",
        },
    ];

    const mealCards = document.getElementById("mealCards");

    // Toggle password visibility
    function togglePassword(fieldId) {
        const field = document.getElementById(fieldId);
        const fieldType = field.getAttribute("type") === "password" ? "text" : "password";
        field.setAttribute("type", fieldType);

        const icon = field.nextElementSibling.querySelector("i");
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    }

    // Filter recipes based on user inputs
    function filterRecipes() {
        const diet = document.getElementById("dietFilter").value;
        const meal = document.getElementById("mealFilter").value;
        const difficulty = document.getElementById("difficultyFilter").value;

        const filteredRecipes = recipes.filter((recipe) => {
            return (
                (diet === "" || recipe.diet === diet) &&
                (meal === "" || recipe.meal === meal) &&
                (difficulty === "" || recipe.difficulty === difficulty)
            );
        });

        displayRecipes(filteredRecipes);
    }

    // Display recipes as cards
    function displayRecipes(recipesToDisplay) {
        mealCards.innerHTML = "";

        if (recipesToDisplay.length === 0) {
            mealCards.innerHTML = `<div class="col-12"><p>No recipes found. Try different filters!</p></div>`;
            return;
        }

        recipesToDisplay.forEach((recipe) => {
            const card = document.createElement("div");
            card.classList.add("col-md-4");
            card.innerHTML = `
                <div class="card">
                    <img src="${recipe.image}" class="card-img-top img-fluid" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text">${recipe.description}</p>
                        <button class="btn btn-primary" onclick="showRecipeDetails(${recipe.id})">View Details</button>
                    </div>
                </div>
            `;
            mealCards.appendChild(card);
        });
    }

    // Show detailed recipe modal
    window.showRecipeDetails = function (recipeId) {
        const recipe = recipes.find((r) => r.id === recipeId);
        document.getElementById("recipeTitle").textContent = recipe.title;
        document.getElementById("recipeDescription").textContent = recipe.description;
        document.getElementById("recipeIngredients").innerHTML = recipe.ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("");
        document.getElementById("recipeInstructions").innerHTML = recipe.instructions
            .map((instruction) => `<li>${instruction}</li>`)
            .join("");
        document.getElementById("recipeNutrition").textContent = recipe.nutrition;
        $("#recipeModal").modal("show");
    };

    // Add event listeners
    document.getElementById("dietFilter").addEventListener("change", filterRecipes);
    document.getElementById("mealFilter").addEventListener("change", filterRecipes);
    document.getElementById("difficultyFilter").addEventListener("change", filterRecipes);

    // Initial display of recipes
    displayRecipes(recipes);
});
//Things left to add are a trackers and sliders, 