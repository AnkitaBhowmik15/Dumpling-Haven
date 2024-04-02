function handleMessage(message) {
    alert(message);
}

function signincheck() {
    console.log('clicked');
    var email = document.getElementById('email').value;
    console.log("userData= "+ email)
    document.cookie = "userData="+ email + "; expires=Thu, 31 Dec 2037 23:59:59 UTC; path=/";
}