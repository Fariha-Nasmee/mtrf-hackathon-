document.addEventListener("DOMContentLoaded", () => {
    "use strict"; //add options for progress bar prefferably with a different html link within 23rd

    const recipes = [
        {
            id: 1,
            title: "Avacado Toast",
            description: "Start your day with a healthy breakfast rich in nutrients.",
            image: "https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg",
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
            nutrition: "Calories: 350, Protein: 20g, Carbs: 30g, Fat: 15g",
        },
        {
            id: 2,
            title: "Vegan Salad",
            description: "A refreshing and nutritious vegan salad.",
            image: "https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg",
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
        {
            id: 3,
            title: "Vegetable Stir-Fry with Tofu",
            description: "A healthy vegetable stir-fry with tofu.",
            image: "https://images.pexels.com/photos/15797936/pexels-photo-15797936.jpeg",
            diet: "vegetarian",
            meal: "lunch",
            difficulty: "easy",
            ingredients: [
                "1 block firm tofu, cubed",
                "1 cup broccoli florets",
                "1 bell pepper, sliced",
                "1/2 onion, sliced",
                "2 tbsp soy sauce",
                "1 tbsp sesame oil",
                "1 tbsp garlic, minced",
                "1 tbsp ginger, minced",
                "1 tbsp sesame seeds (optional)"
            ],
            instructions: [
                "Press tofu to remove excess water, then cut into cubes.",
                "Heat sesame oil in a pan over medium heat.",
                "Add garlic and ginger, sauté until fragrant.",
                "Add tofu cubes and cook until golden brown on all sides.",
                "Add broccoli, bell pepper, and onion. Stir-fry for 5-7 minutes.",
                "Pour in soy sauce and toss to coat the vegetables and tofu.",
                "Sprinkle with sesame seeds (optional) and serve hot."
            ],
            nutrition: "Calories: 350, Protein: 20g, Carbs: 25g, Fat: 22g"
        },
        {
            id: 4,
            title: "Quinoa Salad with Avocado",
            description: "A light, refreshing quinoa salad with avocado and a zesty lemon dressing.",
            image: "https://images.pexels.com/photos/4552127/pexels-photo-4552127.jpeg",
            meal: "lunch",
            difficulty: "easy",
            ingredients: [
                "1 cup cooked quinoa",
                "1 avocado, diced",
                "1 cup cherry tomatoes, halved",
                "1/2 cucumber, diced",
                "1/4 cup red onion, thinly sliced",
                "2 tbsp olive oil",
                "1 tbsp lemon juice",
                "1 tbsp fresh parsley, chopped",
                "Salt and pepper, to taste"
            ],
            instructions: [
                "Cook quinoa according to package instructions and let it cool.",
                "In a large bowl, combine quinoa, avocado, cherry tomatoes, cucumber, and red onion.",
                "In a small bowl, whisk together olive oil, lemon juice, and parsley.",
                "Pour the dressing over the salad and toss gently.",
                "Season with salt and pepper to taste and serve chilled."
            ],
            nutrition: "Calories: 350, Protein: 8g, Carbs: 45g, Fat: 18g"
        },
        {
            id: 5,
            title: "Sweet Potato & Black Bean Tacos",
            description: "A flavorful taco filled with roasted sweet potatoes and black beans, topped with fresh avocado.",
            image: "https://images.pexels.com/photos/4955091/pexels-photo-4955091.jpeg",
            meal: "dinner",
            difficulty: "medium",
            ingredients: [
                "2 medium sweet potatoes, peeled and cubed",
                "1 can black beans, drained and rinsed",
                "1 tsp cumin",
                "1 tsp paprika",
                "1 tbsp olive oil",
                "8 small corn tortillas",
                "1 avocado, sliced",
                "Fresh cilantro, for garnish",
                "Salt and pepper, to taste"
            ],
            instructions: [
                "Preheat the oven to 400°F (200°C).",
                "Toss sweet potato cubes with olive oil, cumin, paprika, salt, and pepper.",
                "Roast sweet potatoes for 25-30 minutes, or until tender and slightly browned.",
                "Warm the tortillas and fill them with roasted sweet potatoes, black beans, and avocado slices.",
                "Top with fresh cilantro and serve."
            ],
            nutrition: "Calories: 350, Protein: 8g, Carbs: 50g, Fat: 15g"
        },
        {
            id: 6,
            title: "Chickpea & Spinach Curry",
            description: "A warm, hearty curry with chickpeas and spinach, served with brown rice.",
            image: "https://images.pexels.com/photos/8625948/pexels-photo-8625948.jpeg",
            meal: "dinner",
            difficulty: "medium",
            ingredients: [
                "1 can chickpeas, drained and rinsed",
                "2 cups fresh spinach",
                "1 onion, chopped",
                "2 cloves garlic, minced",
                "1 can coconut milk",
                "1 tbsp curry powder",
                "1 tbsp olive oil",
                "1 cup brown rice",
                "Salt and pepper, to taste"
            ],
            instructions: [
                "Cook the brown rice according to package instructions.",
                "In a large pan, heat olive oil over medium heat. Add onion and garlic, and sauté until soft.",
                "Add curry powder, chickpeas, coconut milk, and spinach. Stir to combine.",
                "Simmer for 10-15 minutes until the curry thickens and the spinach wilts.",
                "Serve the curry over brown rice."
            ],
            nutrition: "Calories: 400, Protein: 12g, Carbs: 55g, Fat: 18g"
        },
        {
            id: 7,
            title: "Avocado Toast with Cherry Tomatoes",
            description: "Simple and nutritious avocado toast topped with juicy cherry tomatoes and a sprinkle of chili flakes.",
            image: "https://media.istockphoto.com/photos/open-sandwich-set-with-cream-cheese-prosciutto-salmon-avocado-and-fresh-greens-gm1650759102-534088474?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay&utm_term=tomato+avocado+toast",
            diet: "vegetarian",
            meal: "breakfast",
            difficulty: "easy",
            ingredients: [
                "2 slices whole grain bread, toasted",
                "1 avocado, mashed",
                "1/2 cup cherry tomatoes, halved",
                "1 tbsp olive oil",
                "Chili flakes, to taste",
                "Salt and pepper, to taste"
            ],
            instructions: [
                "Toast the slices of bread until golden and crisp.",
                "Mash the avocado and spread it evenly over the toast.",
                "Top with cherry tomatoes, olive oil, and a sprinkle of chili flakes.",
                "Season with salt and pepper to taste, and serve."
            ],
            nutrition: "Calories: 250, Protein: 6g, Carbs: 30g, Fat: 14g"
        },
        {
            id: 8,
            title: "Zucchini Noodles with Pesto",
            description: "Light and fresh zucchini noodles served with homemade basil pesto.",
            image: "https://images.pexels.com/photos/6327626/pexels-photo-6327626.jpeg",
            difficulty: "medium",
            ingredients: [
                "2 medium zucchinis, spiralized",
                "1/4 cup homemade basil pesto (or store-bought)",
                "1 tbsp olive oil",
                "1 tbsp pine nuts, toasted",
                "Vegan parmesan, for garnish"
            ],
            instructions: [
                "Heat olive oil in a pan over medium heat. Add zucchini noodles and sauté for 2-3 minutes.",
                "Toss the noodles with basil pesto until evenly coated.",
                "Top with toasted pine nuts and a sprinkle of vegan parmesan."
            ],
            nutrition: "Calories: 200, Protein: 4g, Carbs: 20g, Fat: 14g"
        },
        {
            id: 9,
            title: "Mango Chia Pudding",
            description: "A sweet and nutritious chia pudding topped with fresh mango.",
            image: "https://images.unsplash.com/photo-1596674470048-6d38963d3988",
            diet: "vegan",
            meal: "dessert",
            difficulty: "easy",
            ingredients: [
                "1/2 cup chia seeds",
                "1 cup almond milk",
                "1 tbsp maple syrup",
                "1/2 mango, diced",
                "1/4 tsp vanilla extract"
            ],
            instructions: [
                "In a bowl, combine chia seeds, almond milk, maple syrup, and vanilla extract.",
                "Mix well and refrigerate for at least 4 hours or overnight to set.",
                "Top with diced mango before serving."
            ],
            nutrition: "Calories: 150, Protein: 4g, Carbs: 25g, Fat: 8g"
        },
        
        {
            "id": 10,
            "title": "Grilled Vegetable Skewers",
            "description": "Colorful grilled vegetables on skewers, served with a tangy dipping sauce.",
            "image": "https://images.pexels.com/photos/8522690/pexels-photo-8522690.jpeg",
            "meal": "dinner",
            "difficulty": "medium",
            "ingredients": [
                "1 red bell pepper, cut into chunks",
                "1 zucchini, sliced",
                "1 red onion, cut into chunks",
                "8 cherry tomatoes",
                "1 tbsp olive oil",
                "1 tbsp balsamic vinegar",
                "Salt and pepper, to taste",
                "For dipping sauce: 1/4 cup tahini, 1 tbsp lemon juice, 1 tsp garlic powder"
            ],
            "instructions": [
                "Preheat the grill to medium-high heat.",
                "Thread the vegetables onto skewers and brush with olive oil, balsamic vinegar, salt, and pepper.",
                "Grill the skewers for 8-10 minutes, turning occasionally, until the vegetables are tender and slightly charred.",
                "Mix tahini, lemon juice, and garlic powder to make the dipping sauce.",
                "Serve the grilled vegetable skewers with the tahini dipping sauce."
            ],
            "nutrition": "Calories: 200, Protein: 6g, Carbs: 35g, Fat: 10g"
        },
        {
            "id": 11,
            "title": "Quinoa Salad with Roasted Vegetables",
            "description": "A nutritious quinoa salad with roasted vegetables, perfect for lunch or dinner.",
            "image": "https://images.pexels.com/photos/248509/pexels-photo-248509.jpeg",
            "meal": "lunch",
            "difficulty": "medium",
            "ingredients": [
                "1 cup quinoa, cooked",
                "1 cup roasted sweet potatoes",
                "1 cup roasted bell peppers",
                "1/2 cup cherry tomatoes",
                "2 tbsp olive oil",
                "1 tbsp lemon juice",
                "Salt and pepper, to taste"
            ],
            "instructions": [
                "Preheat the oven to 400°F (200°C) and roast the sweet potatoes and bell peppers for 20 minutes.",
                "Combine cooked quinoa, roasted vegetables, and cherry tomatoes in a bowl.",
                "Drizzle with olive oil, lemon juice, and season with salt and pepper."
            ],
            "nutrition": "Calories: 350, Protein: 8g, Carbs: 55g, Fat: 10g"
        },
        {
            "id": 12,
            "title": "Stuffed Bell Peppers with Lentils",
            "description": "Delicious bell peppers stuffed with lentils, vegetables, and spices, baked to perfection.",
            "image": "https://images.pexels.com/photos/15747862/pexels-photo-15747862.jpeg",
            "difficulty": "medium",
            "ingredients": [
                "4 bell peppers, tops cut off and seeds removed",
                "1 cup cooked lentils",
                "1/2 cup diced tomatoes",
                "1/4 cup onions, diced",
                "1 tsp cumin",
                "1 tsp paprika",
                "Salt and pepper, to taste"
            ],
            "instructions": [
                "Preheat the oven to 375°F (190°C).",
                "Mix the lentils, tomatoes, onions, cumin, paprika, salt, and pepper.",
                "Stuff the bell peppers with the lentil mixture and place them in a baking dish.",
                "Cover with foil and bake for 30 minutes."
            ],
            "nutrition": "Calories: 220, Protein: 10g, Carbs: 45g, Fat: 3g"
        },
        {
            "id": 13,
            "title": "Gluten-Free Cauliflower Pizza Crust",
            "description": "A gluten-free pizza crust made from cauliflower, perfect for a healthy pizza night.",
            "image": "https://images.pexels.com/photos/17132216/pexels-photo-17132216.jpeg",
            "diet": "gluten-free",
            "meal": "dinner",
            "difficulty": "medium",
            "ingredients": [
                "1 medium cauliflower, grated",
                "1/2 cup almond flour",
                "1 egg",
                "1/4 cup nutritional yeast",
                "1 tsp garlic powder",
                "Salt and pepper, to taste"
            ],
            "instructions": [
                "Preheat the oven to 400°F (200°C).",
                "Grate the cauliflower and microwave it for 4-5 minutes, then squeeze out excess water.",
                "Mix the cauliflower with almond flour, egg, nutritional yeast, garlic powder, salt, and pepper.",
                "Form the dough into a pizza crust and bake for 15-20 minutes.",
                "Top with your favorite ingredients and bake for another 5-10 minutes."
            ],
            "nutrition": "Calories: 180, Protein: 8g, Carbs: 12g, Fat: 12g"
        },
        
        {
            "id": 14,
            "title": "Chia Seed Pudding with Berries",
            "description": "A healthy chia seed pudding topped with fresh berries, perfect for breakfast or a snack.",
            "image": "https://images.pexels.com/photos/9022035/pexels-photo-9022035.jpeg",
            "meal": "breakfast",
            "difficulty": "easy",
            "ingredients": [
                "1/4 cup chia seeds",
                "1 cup coconut milk",
                "1 tbsp maple syrup",
                "1/2 cup mixed berries"
            ],
            "instructions": [
                "Combine chia seeds, coconut milk, and maple syrup in a bowl.",
                "Stir well and refrigerate overnight to set.",
                "Top with fresh berries before serving."
            ],
            "nutrition": "Calories: 200, Protein: 4g, Carbs: 25g, Fat: 12g"
        },
        {
            "id": 16,
            "title": "Spaghetti Squash with Marinara Sauce",
            "description": "A gluten-free alternative to pasta made with spaghetti squash, topped with marinara sauce.",
            "image": "https://images.pexels.com/photos/23645811/pexels-photo-23645811.jpeg",
            "diet": "gluten-free",
            "meal": "dinner",
            "difficulty": "medium",
            "ingredients": [
                "1 medium spaghetti squash",
                "1 cup marinara sauce",
                "1 tbsp olive oil",
                "1/4 cup fresh basil, chopped",
                "Salt and pepper, to taste"
            ],
            "instructions": [
                "Preheat the oven to 400°F (200°C).",
                "Cut the spaghetti squash in half, remove seeds, and bake for 30-40 minutes.",
                "Scrape the flesh into spaghetti-like strands.",
                "Top with marinara sauce, olive oil, fresh basil, salt, and pepper."
            ],
            "nutrition": "Calories: 180, Protein: 5g, Carbs: 30g, Fat: 7g"
        },
        {
            "id": 17,
            "title": "Vegetarian Burrito Bowl",
            "description": "A colorful burrito bowl with rice, beans, veggies, and avocado, served with a tangy lime dressing.",
            "image": "https://images.pexels.com/photos/726000/pexels-photo-726000.jpeg",
            "meal": "dinner",
            "difficulty": "medium",
            "ingredients": [
                "1 cup cooked brown rice",
                "1 can black beans, drained and rinsed",
                "1/2 cup corn kernels",
                "1/2 avocado, sliced",
                "1/4 cup red onion, diced",
                "1 tbsp lime juice",
                "Salt and pepper, to taste"
            ],
            "instructions": [
                "Assemble the bowl with rice, black beans, corn, avocado, and red onion.",
                "Drizzle with lime juice, season with salt and pepper, and serve."
            ],
            "nutrition": "Calories: 350, Protein: 12g, Carbs: 50g, Fat: 14g"
        },
        {
            "id": 18,
            "title": "Vegan Mushroom Risotto",
            "description": "A creamy and rich mushroom risotto made with vegetable broth and coconut milk.",
            "image": "https://images.pexels.com/photos/6546549/pexels-photo-6546549.jpeg",
            "diet": "vegan",
            "meal": "dinner",
            "difficulty": "medium",
            "ingredients": [
                "1 cup Arborio rice",
                "2 cups vegetable broth",
                "1 cup coconut milk",
                "1/2 cup mushrooms, sliced",
                "1/4 cup onions, chopped",
                "1 tbsp olive oil",
                "1 tsp garlic, minced",
                "Salt and pepper, to taste"
            ],
            "instructions": [
                "In a pan, sauté onions and garlic in olive oil until softened.",
                "Add Arborio rice and cook for 2 minutes.",
                "Gradually add broth, stirring constantly until absorbed.",
                "Stir in mushrooms, coconut milk, salt, and pepper, and cook until creamy."
            ],
            "nutrition": "Calories: 350, Protein: 6g, Carbs: 50g, Fat: 14g"
        },
        {
            "id": 19,
            "title": "Gluten-Free Banana Pancakes",
            "description": "Fluffy gluten-free pancakes made with mashed bananas and almond flour, topped with maple syrup.",
            "image": "https://images.pexels.com/photos/7144964/pexels-photo-7144964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "diet": "gluten-free",
            "meal": "breakfast",
            "difficulty": "easy",
            "ingredients": [
                "1 ripe banana, mashed",
                "1/2 cup almond flour",
                "2 eggs",
                "1 tsp baking powder (gluten-free)",
                "1/4 tsp cinnamon",
                "Maple syrup, for topping"
            ],
            "instructions": [
                "Mix mashed banana, almond flour, eggs, baking powder, and cinnamon to make batter.",
                "Heat a pan over medium heat and cook pancakes for 2-3 minutes per side.",
                "Serve with maple syrup."
            ],
            "nutrition": "Calories: 220, Protein: 10g, Carbs: 22g, Fat: 12g"
        }
        
        
        
        
        

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