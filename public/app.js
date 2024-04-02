angular.module('foodApp', [])
    .controller('FoodController', function ($scope) {
        $scope.foodItems = [{
            "_id": {
              "$oid": "660a9864f663d40324a0a260"
            },
            "Fooditem": "Pork and Chive Dumpling",
            "Discount": 15,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 220,
            "Newprice": 187,
            "img":"image3.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a261"
            },
            "Fooditem": "Chicken and Mushroom Dumpling",
            "Discount": 15,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 250,
            "Newprice": 213,
            "img":"chicken.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a262"
            },
            "Fooditem": "Vegetable Dumpling (Spinach, Mushroom and Tofu) ",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Veg",
            "Oldprice": 210,
            "Newprice": 189,
            "img":"image4.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a263"
            },
            "Fooditem": "Seafood Surprise Dumpling",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 350,
            "Newprice": 315,
            "img":"image1.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a264"
            },
            "Fooditem": "Cheese Burst Dumpling",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Veg",
            "Oldprice": 180,
            "Newprice": 162,
            "img":"image5.avif"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a265"
            },
            "Fooditem": "Crispy Pork Dumpling",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 200,
            "Newprice": 180,
            "img":"image12.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a266"
            },
            "Fooditem": "Shrimp and Garlic Dumpling ",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 280,
            "Newprice": 252,
            "img":"saucedumpling.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a267"
            },
            "Fooditem": "Vegetarian Potstickers",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Veg",
            "Oldprice": 190,
            "Newprice": 171,
            "img":"image3.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a268"
            },
            "Fooditem": "Crispy Chicken Cheese Dumpling",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 300,
            "Newprice": 270,
            "img":"image5.avif"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a269"
            },
            "Fooditem": "Chicken Dumpling Comfort Soup",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 290,
            "Newprice": 261,
            "img":"image6.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a26a"
            },
            "Fooditem": "Prawn Dumpling Broth Bliss",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 310,
            "Newprice": 279,
            "img":"image7.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a26b"
            },
            "Fooditem": "Tofu Dumpling Zen Noodle Soup",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Veg",
            "Oldprice": 280,
            "Newprice": 252,
            "img":"image6.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a26c"
            },
            "Fooditem": "Prawn Dumpling Harmony Stew",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 310,
            "Newprice": 279,
            "img":"image7.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a26d"
            },
            "Fooditem": "Chicken and Prawn Dumpling Miso Soup",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 320,
            "Newprice": 288,
            "img":"image7.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a26e"
            },
            "Fooditem": "Dragon's Breath Chicken Dumpling Hot Pot",
            "Discount": 10,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 280,
            "Newprice": 252,
            "img":"image6.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a26f"
            },
            "Fooditem": "Dumpling Delight Platter (Chicken, Prawn, Tofu, Mushroom)",
            "Discount": 5,
            "Title":"Appetizers",
            "Tag": "Non-veg",
            "Oldprice": 380,
            "Newprice": 361,
            "img":"image8.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a270"
            },
            "Fooditem": "Golden Crisp Dumpling Basket",
            "Discount": 5,
            "Title":"Appetizers",
            "Tag": "Non-veg/Veg",
            "Oldprice": 400,
            "Newprice": 380,
            "img":"image9.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a271"
            },
            "Fooditem": "Blossom Dumpling Extravaganza",
            "Discount": 5,
            "Title":"Appetizers",
            "Tag": "Non-veg/Veg",
            "Oldprice": 390,
            "Newprice": 371,
            "img":"image10.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a272"
            },
            "Fooditem": "Dumpling Noodle Soup (with choice of dumplings)",
            "Discount": 5,
            "Title":"Main Courses",
            "Tag": "Non-veg/Veg",
            "Oldprice": 400,
            "Newprice": 380,
            "img":"image6.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a273"
            },
            "Fooditem": "Stir-Fried Noodles with Dumplings and Vegetables",
            "Discount": 5,
            "Title":"Main Courses",
            "Tag": "Non-veg/Veg",
            "Oldprice": 310,
            "Newprice": 295,
            "img":"stirfried.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a274"
            },
            "Fooditem": "Teriyaki Chicken Dumpling Rice Bowl",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Non-veg",
            "Oldprice": 290,
            "Newprice": 261,
            "img":"nonvegricebowl.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a275"
            },
            "Fooditem": "Beef Bulgogi Dumpling Rice Bowl",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Non-veg",
            "Oldprice": 210,
            "Newprice": 189,
            "img":"nonvegricebowl.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a276"
            },
            "Fooditem": "Tofu and Vegetable Dumpling Rice Bowl",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Veg",
            "Oldprice": 180,
            "Newprice": 162,
            "img":"vegricebowl.webp"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a277"
            },
            "Fooditem": "Bok Choy Wrapped Dumpling",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Non-veg/Veg",
            "Oldprice": 210,
            "Newprice": 189,
            "img":"image11.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a278"
            },
            "Fooditem": "Kung Pao Dumplings",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Non-veg",
            "Oldprice": 230,
            "Newprice": 207,
            "img":"chicken.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a279"
            },
            "Fooditem": "Sweet and Sour Dumplings",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Non-veg/Veg",
            "Oldprice": 230,
            "Newprice": 207,
            "img":"image6.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a27a"
            },
            "Fooditem": "Spicy Garlic Dumpling Stir-Fry",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Veg",
            "Oldprice": 170,
            "Newprice": 153,
            "img":"stirfried.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a27b"
            },
            "Fooditem": "Dumplings in Spicy Sichuan Sauce",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Non-veg/Veg",
            "Oldprice": 190,
            "Newprice": 171,
            "img":"saucedumpling.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a27c"
            },
            "Fooditem": "Dumplings in Black Bean Sauce",
            "Discount": 10,
            "Title":"Main Courses",
            "Tag": "Non-veg/Veg",
            "Oldprice": 220,
            "Newprice": 198,
            "img":"blackbean.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a27d"
            },
            "Fooditem": "Dumplings in Chili Oil",
            "Discount": 15,
            "Title":"Main Courses",
            "Tag": "Non-veg/Veg",
            "Oldprice": 190,
            "Newprice": 162,
            "img":"saucedumpling.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a27e"
            },
            "Fooditem": "Asian Slaw: Shredded cabbage, carrots, and sesame dressing.",
            "Discount": 15,
            "Title":"Sides",
            "Tag": "Veg",
            "Oldprice": 100,
            "Newprice": 85,
            "img":"salad.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a27f"
            },
            "Fooditem": "Steamed Greens: Bok Choy or Chinese Broccoli with Garlic Sauce.",
            "Discount": 15,
            "Title":"Sides",
            "Tag": "Veg",
            "Oldprice": 100,
            "Newprice": 85,
            "img":"steamed greens.webp"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a280"
            },
            "Fooditem": "Fried Rice: Classic, Vegetable, or Shrimp Fried Rice.",
            "Discount": 15,
            "Title":"Sides",
            "Tag": "Non-veg/Veg",
            "Oldprice": 180,
            "Newprice": 153,
            "img":"Shrimp-Fried-Rice.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a281"
            },
            "Fooditem": "Sauces: Soy sauce, chili oil, vinegar, and garlic sauce for dipping.",
            "Discount": 0,
            "Title":"Sides",
            "Tag": "Veg",
            "Oldprice": 20,
            "Newprice": 20,
            "img":"Sauces.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a282"
            },
            "Fooditem": "Dragon Chicken",
            "Discount": 15,
            "Title":"Sides",
            "Tag": "Non-veg",
            "Oldprice": 190,
            "Newprice": 162,
            "img":"dragon-chicken.webp"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a283"
            },
            "Fooditem": "Chili Prawn",
            "Discount": 15,
            "Title":"Sides",
            "Tag": "Non-veg",
            "Oldprice": 250,
            "Newprice": 213,
            "img":"Chilli-Prawns.webp"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a284"
            },
            "Fooditem": "Chili Mushroom",
            "Discount": 15,
            "Title":"Sides",
            "Tag": "Veg",
            "Oldprice": 160,
            "Newprice": 136,
            "img":"chilli-mushroom.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a285"
            },
            "Fooditem": "Chili Baby Corn and Tofu",
            "Discount": 15,
            "Title":"Sides",
            "Tag": "Veg",
            "Oldprice": 210,
            "Newprice": 179,
            "img":"chili-baby-corn.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a286"
            },
            "Fooditem": "Red Bean Paste Dumpling",
            "Discount": 15,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 170,
            "Newprice": 145,
            "img":"redbeanpaste.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a287"
            },
            "Fooditem": "Sesame Ball Dumpling",
            "Discount": 15,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 170,
            "Newprice": 145,
            "img":"sesameball.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a288"
            },
            "Fooditem": "Pineapple and Coconut Dumpling",
            "Discount": 15,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 170,
            "Newprice": 145,
            "img":"dessert1.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a289"
            },
            "Fooditem": "Chocolate Dumpling",
            "Discount": 15,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 170,
            "Newprice": 145,
            "img":"dessert2.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a28a"
            },
            "Fooditem": "Mango Sticky Rice",
            "Discount": 15,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 130,
            "Newprice": 111,
            "img":"mangorice.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a28b"
            },
            "Fooditem": "Fried Ice Cream",
            "Discount": 0,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 110,
            "Newprice": 110,
            "img":"icecream2.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a28c"
            },
            "Fooditem": "Rolled Ice Cream",
            "Discount": 0,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 110,
            "Newprice": 110,
            "img":"icecream.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a28d"
            },
            "Fooditem": "Cheese Cake",
            "Discount": 0,
            "Title":"Desserts",
            "Tag": "Veg",
            "Oldprice": 110,
            "Newprice": 110,
            "img":"cake.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a28e"
            },
            "Fooditem": "Mango Milkshake",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 90,
            "Newprice": 90,
            "img":"milkshake.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a28f"
            },
            "Fooditem": "Kiwi and Passion Fruit Shake",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 90,
            "Newprice": 90,
            "img":"milkshake.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a290"
            },
            "Fooditem": "Bubble Tea: Classic Milk Tea, Taro, Mango, or Matcha flavors.",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 80,
            "Newprice": 80,
            "img":"bubbletea.webp"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a291"
            },
            "Fooditem": " Lychee Martini",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 90,
            "Newprice": 90,
            "img":"martini.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a292"
            },
            "Fooditem": "Sake Mojito",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 90,
            "Newprice": 90,
            "img":"mojito.webp"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a294"
            },
            "Fooditem": "Jasmine Tea",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 70,
            "Newprice": 70,
            "img":"tea.jpg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a295"
            },
            "Fooditem": "Oolong Tea",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 70,
            "Newprice": 70,
            "img":"image13.jpeg"
          },
          {
            "_id": {
              "$oid": "660a9864f663d40324a0a296"
            },
            "Fooditem": "Cold Coffee",
            "Discount": 0,
            "Title":"Beverages",
            "Tag": "Veg",
            "Oldprice": 90,
            "Newprice": 90,
            "img":"coldcoffee.jpg"
          }];

        $scope.filterTag = 'All';

        $scope.$watch('filterTag', function(newVal, oldVal) {
            if (newVal === 'All') {
                $scope.filteredFoods = $scope.foodItems;
            } else {
                $scope.filteredFoods = $scope.foodItems.filter(function(food) {
                    return food.Tag === newVal;
                });
            }
        });
    });
