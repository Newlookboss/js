const form = document.querySelector("form");
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitButton = document.querySelector('input[type="submit"]');

function checkInputs() {
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const isValid = usernameValue.length >= 6 && passwordValue.length >= 6;
  submitButton.disabled = !isValid;
}

usernameInput.addEventListener("keyup", checkInputs);
passwordInput.addEventListener("keyup", checkInputs);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  alert(`Username: ${usernameValue} \n Password: ${passwordValue}`);
});
