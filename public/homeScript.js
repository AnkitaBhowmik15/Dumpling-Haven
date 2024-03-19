// function openLoginPage() {
//     window.open("login.html", "_blank");
//   }
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
  window.location.href = '/login';
});