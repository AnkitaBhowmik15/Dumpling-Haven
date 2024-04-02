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

function acceptCookies() {
    console.log("Accepting cookies...");
    document.getElementById('card').style.display = 'none';

    var currentTime = new Date().getTime();
    document.cookie = "cookieConsentTime=" + currentTime + "; expires=Thu, 31 Dec 2037 23:59:59 UTC; path=/";
}