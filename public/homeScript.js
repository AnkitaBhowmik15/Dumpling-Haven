// function openLoginPage() {
//     window.open("login.html", "_blank");
//   }

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

fetch('/api/users').then(response => response.json()).then(user => {
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

console.log(users)