// const close = document.querySelector('.cookie_close');
// const cookiepop = document.querySelector('.cookie_pop_up');
// close.addEventListener("click", closefun);
// function closefun()
// {
//     cookiepop.style.display = 'none';
// }

// if(document.cookie.startsWith("acceptedCookies=")){
//     cookiepop.style.display = 'none';
// }
// const cookiebutton = document.querySelector('.cookie_button');
// cookiebutton.addEventListener('click', acceptCookies);


// function setCookie(name, value, days) {
//     var now = new Date();
//     var expirationTime = new Date(now.getTime() + (days*30* 1000));
//     document.cookie = name + "=" + value + "; expires=" + expirationTime.toUTCString() + "; path=/; SameSite=None; Secure";
//     cookiepop.style.display = 'none';
// }


// function acceptCookies() {
//     setCookie('acceptedCookies', 'true', 1);
// }

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function acceptCookies() {
    console.log("Accepting cookies...");
    document.getElementById('card').style.display = 'none';

    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "cookieConsentTime=" + 'now' + ";" + expires + "; path=/";

    let user = getCookie("userData");
    if (user != "") {
        document.getElementById('loginButton').innerHTML = `<button onclick="resetCookies()"><p>Hello, ${user}</p></button>`;
        alert("Welcome again " + user);
    }
}


function resetCookies() {
    console.log("Resetting all cookies...");
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "userData=" + '' + ";" + expires + "; path=/";
    document.getElementById('loginButton').innerHTML = `<div id="loginButton" class="basket"><a href="/login">Login/Signup</a></div>`;
}