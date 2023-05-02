const chefs = [
    {
        id: 1,
        chefPicture: "https://www.example.com/chef1.jpg",
        chefName: "John Doe",
        yearsOfExperience: 10,
        chefDescription: "John is a professional chef with over 10 years of experience.",
        recipes: [
            {
                recipeName: "Pasta",
                ingredients: ["pasta", "tomatoes", "olive oil", "garlic", "basil"],
                cookingMethod: "Boil pasta until al dente. In a separate pan, sauté garlic and tomatoes in olive oil. Add cooked pasta to the pan and toss with fresh basil.",
                rating: 4.5
            },
            {
                recipeName: "Pizza",
                ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "pepperoni", "mushrooms"],
                cookingMethod: "Preheat oven to 425 degrees F. Roll out pizza dough and spread tomato sauce on top. Add cheese, pepperoni, and mushrooms. Bake for 12-15 minutes.",
                rating: 4.2
            },
            {
                recipeName: "Salad",
                ingredients: ["lettuce", "tomatoes", "cucumbers", "olives", "feta cheese"],
                cookingMethod: "Wash and chop lettuce, tomatoes, and cucumbers. Add olives and feta cheese. Toss with olive oil and vinegar.",
                rating: 4.0
            }
        ],
        likes: 1000
    },
    {
        id: 2,
        chefPicture: "https://www.example.com/chef2.jpg",
        chefName: "Jane Smith",
        yearsOfExperience: 5,
        chefDescription: "Jane is a pastry chef with over 5 years of experience.",
        recipes: [
            {
                recipeName: "Chocolate Cake",
                ingredients: ["flour", "sugar", "cocoa powder", "baking powder", "eggs"],
                cookingMethod: "Preheat oven to 350 degrees F. Mix flour, sugar, cocoa powder, and baking powder in a bowl. Add eggs and mix until smooth. Pour batter into a greased cake pan and bake for 30-35 minutes.",
                rating: 4.8
            },
            {
                recipeName: "Apple Pie",
                ingredients: ["apples", "sugar", "cinnamon", "nutmeg", "pie crust"],
                cookingMethod: "Preheat oven to 375 degrees F. Peel and slice apples. Mix sugar, cinnamon, and nutmeg in a bowl. Add apples to the bowl and toss until coated. Pour mixture into pie crust and bake for 45-50 minutes.",
                rating: 4.6
            },
            {
                recipeName: "Cupcakes",
                ingredients: ["flour", "sugar", "butter", "eggs", "vanilla extract"],
                cookingMethod: "Preheat oven to 350 degrees F. Mix flour, sugar, butter, eggs, and vanilla extract in a bowl until smooth. Pour batter into cupcake liners and bake for 20-25 minutes.",
                rating: 4.3
            }
        ],
        likes: 500
    }
    ,
    {
        id: 3,
        chefPicture: "https://www.example.com/chef1.jpg",
        chefName: "Chef John",
        yearsOfExperience: 10,
        chefDescription: "I am a professional chef with over 10 years of experience in the culinary arts.",
        recipes: [
            {
                recipeName: "Spaghetti Carbonara",
                ingredients: ["spaghetti", "bacon", "eggs", "parmesan cheese", "black pepper"],
                cookingMethod: "Boil spaghetti until al dente. Cook bacon until crispy. Beat eggs and parmesan cheese together. Toss spaghetti with bacon and egg mixture. Season with black pepper.",
                rating: 4.5
            },
            {
                recipeName: "Beef Stroganoff",
                ingredients: ["beef sirloin", "onion", "mushrooms", "sour cream", "beef broth"],
                cookingMethod: "Season beef with salt and pepper. Brown beef in a pan. Add onion and mushrooms. Cook until tender. Add sour cream and beef broth. Simmer until sauce thickens.",
                rating: 4.2
            },
            {
                recipeName: "Chicken Alfredo",
                ingredients: ["chicken breast", "fettuccine pasta", "heavy cream", "butter", "parmesan cheese"],
                cookingMethod: "Cook chicken breast in a pan. Boil fettuccine pasta until al dente. Melt butter in a pan. Add heavy cream and parmesan cheese. Stir until sauce thickens. Toss pasta with sauce and chicken.",
                rating: 4.7
            }
        ],
        likes: 1000
    },
    {
        id: 4,
        chefPicture: "https://www.example.com/chef2.jpg",
        chefName: "Chef Sarah",
        yearsOfExperience: 8,
        chefDescription: "I am a professional chef with over 8 years of experience in the culinary arts.",
        recipes: [
            {
                recipeName: "Beef Wellington",
                ingredients: ["beef tenderloin", "puff pastry", "mushrooms", "prosciutto", "egg wash"],
                cookingMethod: "Season beef tenderloin with salt and pepper. Sear beef on all sides. Wrap beef in puff pastry with mushrooms and prosciutto. Brush with egg wash. Bake until golden brown.",
                rating: 4.9
            },
            {
                recipeName: "Lobster Bisque",
                ingredients: ["lobster meat", "heavy cream", "butter", "flour", "chicken broth"],
                cookingMethod: "Melt butter in a pan. Add flour to make a roux. Add chicken broth and heavy cream. Simmer until sauce thickens. Add lobster meat and cook until heated through.",
                rating: 4.6
            },
            {
                recipeName: "Crème Brûlée",
                ingredients: ["heavy cream", "egg yolks", "sugar", "vanilla extract"],
                cookingMethod: "Heat heavy cream in a pan. Beat egg yolks and sugar together. Slowly add hot cream to egg mixture while whisking constantly. Add vanilla extract. Pour mixture into ramekins and bake in a water bath until set.",
                rating: 4.8
            }
        ],
        likes: 2000
    },
    {
        id: 5,
        chefPicture: 'https://www.example.com/chef1.jpg',
        chefName: 'John Smit',
        yearsOfExperience: 10,
        chefDescription: 'I am a professional chef with over 10 years of experience in the culinary arts.',
        recipes: [
            {
                recipeName: 'Spaghetti Carbonara',
                ingredients: ['spaghetti', 'bacon', 'eggs', 'parmesan cheese', 'black pepper'],
                cookingMethod: 'Boil spaghetti until al dente. Fry bacon until crispy. Beat eggs and parmesan cheese together. Drain spaghetti and add to bacon. Add egg mixture and stir until eggs are cooked. Season with black pepper.',
                rating: 4.5
            },
            {
                recipeName: 'Beef Stroganoff',
                ingredients: ['beef', 'sour cream', 'onion', 'mushrooms', 'beef broth'],
                cookingMethod: 'Brown beef in a pan. Add onions and mushrooms and cook until soft. Add beef broth and simmer for 30 minutes. Stir in sour cream and serve over noodles.',
                rating: 4.2
            },
            {
                recipeName: 'Chicken Alfredo',
                ingredients: ['chicken', 'fettuccine', 'heavy cream', 'butter', 'parmesan cheese'],
                cookingMethod: 'Cook chicken in a pan until browned. Cook fettuccine according to package directions. Melt butter in a saucepan. Add heavy cream and parmesan cheese and stir until melted. Add chicken to sauce and serve over fettuccine.',
                rating: 4.8
            }
        ],
        likes: 1000
    },
    {
        id: 6,
        chefPicture: 'https://www.example.com/chef2.jpg',
        chefName: 'Jane Smith',
        yearsOfExperience: 5,
        chefDescription: 'I am a passionate home cook who loves to experiment with new flavors and techniques.',
        recipes: [
            {
                recipeName: 'Beef Tacos',
                ingredients: ['ground beef', 'taco seasoning', 'tortillas', 'lettuce', 'tomatoes'],
                cookingMethod: 'Brown ground beef in a pan. Add taco seasoning and cook for another minute. Heat tortillas in the microwave or on the stove. Assemble tacos with beef, lettuce, and tomatoes.',
                rating: 4.0
            },
            {
                recipeName: 'Pesto Pasta',
                ingredients: ['pasta', 'pesto sauce', 'cherry tomatoes', 'parmesan cheese', 'pine nuts'],
                cookingMethod: "Cook pasta according to package directions. Drain pasta and add pesto sauce. Stir in cherry tomatoes, parmesan cheese, and pine nuts.",
                rating: 4.3
            },
            {
                recipeName: "Jane's Famous Chocolate Chip Cookies",
                ingredients: ['flour', 'butter', 'sugar', 'brown sugar', 'chocolate chips'],
                cookingMethod: "Preheat oven to 375°F (190°C). Cream together butter, sugar, and brown sugar until light and fluffy. Beat in eggs one at a time, then stir in vanilla. Combine flour, baking soda, and salt; gradually stir into butter mixture. Stir in chocolate chips. Drop by rounded tablespoonfuls onto unerased cookie sheets. Bake for 8 to 10 minutes or until golden brown.",
                rating: 4.7
            }
        ],
        likes: 500
    },
];