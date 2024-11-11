function togglePassword() {
  const passwordInput = document.getElementById("password");
  const image = document.getElementById('myImage');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    image.src = 'images/eye-open.png';
  } else {
    passwordInput.type = "password";
    image.src = 'images/eye-close.png';

  }
}