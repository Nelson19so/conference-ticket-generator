const avatarInput = document.getElementById("avatar");
const displayImg = document.getElementById("img-user");

avatarInput.addEventListener("change", (event) => {
  const selectfile = event.target.file[0];
  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    displayImg.src = e.target.result;
  });

  reader.readAsDataURL(selectfile);
});

// form validation.
const username = document.getElementById("username");
const email = document.getElementById("email");
const github = document.getElementById("github");
const submitForm = document.getElementById("submit-form");
const usernameError = document.getElementById("displayNone");
const emailError = document.getElementById("displayNoneemail");
const githubError = document.getElementById("displayNonegithub");

const minLengh = 4;
const displayError = false;

usernameError.style.display = "none";
emailError.style.display = "none";
githubError.style.display = "none";

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const githubValue = github.value.trim();

  if (usernameValue == "" || usernameValue.length <= minLengh) {
    usernameError.classList.add("username-error");
    usernameError.style.display = "block";
  } else if (emailValue == "") {
    emailError.classList.add("email-error");
    emailError.style.display = "block";
  } else if (githubValue === "") {
    githubError.classList.add("github-error");
    githubError.style.display = "block";
  } else {
    usernameError.style.display = "none";
    emailError.style.display = "none";
    githubError.style.display = "none";
  }
});
// ---------------------------------
