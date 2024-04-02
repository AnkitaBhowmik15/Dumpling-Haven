function handleMessage(message) {
    alert(message);
}

function signincheck() {
    console.log('clicked');
    var email = document.getElementById('email').value;
    console.log("userData= "+ email)
    document.cookie = "userData="+ email + "; expires=Thu, 31 Dec 2037 23:59:59 UTC; path=/";
    // fetch('/LoginAlert').then(response => response.json()).then(data => {
        // console.log(data);
        // handleMessage(data.message);

        // if(data.type == 'login') {
        //     fetch('/incorrectPass').then(response => response.json()).then(data => {
        //         console.log(data);
        //         handleMessage(data.message);
        //     });
        // }

        // if(data.type == 'signup') {
        //     fetch('/LoginAlert').then(response => response.json()).then(data => {
        //         console.log(data);
        //         handleMessage(data.message);
        //     });
        // }

        // const menuContainer = document.querySelector(".error");

        // const postMethods = () => {
        //     food.map((postData) => {
        //     // console.log(postData);
        //     var newEle = document.createElement('h5')
        //     newEle.innerHTML = ` user already registed !!`;

        //     menuContainer.append(newEle);
        //     // const newEle = document.createElement('div');
        //     // newEle.classList.add('card');
        //     // newEle.innerHTML = `
        //     // <p> Hello World ${postData.title} </p>
        //     // <p> New Element </p>
        //     // `
        //     // postcontainer.appendChild(newEle);
        //     });
        // }

        // postMethods()

        // document.getElementById("error").innerHTML = `
        // <h3> User already exist </h3>
        // `;
    // });
}