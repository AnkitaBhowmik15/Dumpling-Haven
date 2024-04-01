// function openLoginPage() {
//     window.open("login.html", "_blank");
//   }

// const { response } = require("express");

// const cardData = [
//   {
//     title: "hello",
//     body:"World"
//   },
//   {
//     title: "hello2",
//     body: "world"
//   }
// ]

// const postcontainer = document.querySelector(".featured-items-list");

// const postMethods = () => {
//   cardData.map((postData) => {
//     console.log(postData);
    // const newEle = document.createElement('div');
    // newEle.classList.add('card');
    // newEle.innerHTML = `
    // <p> Hello World ${postData.title} </p>
    // <p> New Element </p>
    // `

    // postcontainer.appendChild(newEle);
//   });
// }

// postMethods()

fetch('/api/foodItems').then(response => response.json()).then(food => {
    console.log('food fetched');

    const menuContainer = document.querySelector(".food-menu-list");

    const postMethods = () => {
        food.map((postData) => {
        console.log(postData);
        var newEle = document.createElement('li')
        newEle.innerHTML =
        `
            <div class="food-menu-card">
                <div class="card-banner">
                <img src="./assets/food/${postData.img}" width="300" height="300" loading="lazy"
                alt="Fried Chicken Unlimited" class="w-100">
                <div class="badge">-${postData.Discount}%</div>

                <button class="btn food-menu-btn">Order Now</button>
            </div>

            <div class="wrapper">
                <p class="category">${postData.Tag}</p>

                <div class="rating-wrapper">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                </div>
            </div>

            <h3 class="h3 card-title">${postData.Fooditem}</h3>

            <div class="price-wrapper">

                <p class="price-text">Price:</p>

                <data class="price">Rs. ${postData.Newprice}</data>

                <del class="del" value="69.00">Rs. ${postData.Oldprice}</del>

            </div>

            </div>
        `;

        menuContainer.append(newEle);
        // const newEle = document.createElement('div');
        // newEle.classList.add('card');
        // newEle.innerHTML = `
        // <p> Hello World ${postData.title} </p>
        // <p> New Element </p>
        // `
        // postcontainer.appendChild(newEle);
        });
    }

    postMethods()







    // <li>
    //           <div class="food-menu-card">

    //             <div class="card-banner">
    //               <img src="./assets/images/food-menu-1.png" width="300" height="300" loading="lazy"
    //                 alt="Fried Chicken Unlimited" class="w-100">

    //               <div class="badge">-15%</div>

    //               <button class="btn food-menu-btn">Order Now</button>
    //             </div>

    //             <div class="wrapper">
    //               <p class="category">Chicken</p>

    //               <div class="rating-wrapper">
    //                 <ion-icon name="star"></ion-icon>
    //                 <ion-icon name="star"></ion-icon>
    //                 <ion-icon name="star"></ion-icon>
    //                 <ion-icon name="star"></ion-icon>
    //                 <ion-icon name="star"></ion-icon>
    //               </div>
    //             </div>

    //             <h3 class="h3 card-title">Fried Chicken Unlimited</h3>

    //             <div class="price-wrapper">

    //               <p class="price-text">Price:</p>

    //               <data class="price">$49.00</data>

    //               <del class="del" value="69.00">$69.00</del>

    //             </div>

    //           </div>
    //         </li>
});


fetch('/api/users').then(response => response.json()).then(user => {
    console.log('data Feteched');
    console.log(user);
    const postcontainer = document.querySelector(".featured-items-list");

    const postMethods = () => {
        user.map((postData) => {
        console.log(postData);
        var newEle = document.createElement('li')
        newEle.innerHTML = `Hello ${postData.name}`;

        postcontainer.append(newEle);
        // const newEle = document.createElement('div');
        // newEle.classList.add('card');
        // newEle.innerHTML = `
        // <p> Hello World ${postData.title} </p>
        // <p> New Element </p>
        // `
        // postcontainer.appendChild(newEle);
        });
    }

    postMethods()
});