// setting if true or false statement when the form is validet, to know ....|
// when the form is valied in other to generate ticket
let validetFormImg = false;
let validetForminput = false;

// avatar validation
const avatarInput = document.getElementById("avatar");
const displayImg = document.getElementById("img-user");
const imgDescr = document.getElementById("descr");
const displayBtnChanges = document.getElementById("display-btn");
const removeImg = document.getElementById("Remove-img");
const imageUpload = document.getElementById("image-upload");
const avatarBox = document.getElementById("container-avatar");
const imgError = document.getElementById("img-error");

displayBtnChanges.style.display = "none";
let buttonAction = true;

avatarInput.addEventListener("change", (event) => {
  if (event.target.files && event.target.files.length > 0) {
    const selectfile = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      displayImg.src = e.target.result;
    });

    reader.readAsDataURL(selectfile);
    avatarInput.style.display = "none";
    imgDescr.style.display = "none";
    displayBtnChanges.style.display = "flex";
    displayBtnChanges.style.justifyContent = "center";
    buttonAction = false;

    if (selectfile.size > 500 * 1024) {
      imgError.textContent =
        "File too large, please upload a photo under 500kb";
      imgError.style.color = "#f57261";
      validetFormImg = false;
    } else if (!selectfile.type.match("image/jpeg")) {
      imgError.textContent = "File format must be jpg";
      imgError.style.color = "#f57261";
      validetFormImg = false;
    } else {
      validetFormImg = true;
      imgError.textContent = "Upload your photo (JPG or PMG, max size: 500kb)";
      imgError.style.color = "";
    }
  }
});

avatarBox.addEventListener("click", (e) => {
  if (buttonAction) {
    avatarInput.click();
    e.stopPropagation();
  }
});

imageUpload.addEventListener("click", () => {
  avatarInput.click();
});

removeImg.addEventListener("click", () => {
  displayImg.src = "./asset/images/icon-upload.svg";
  displayBtnChanges.style.display = "none";
  imgDescr.style.display = "block";
  buttonAction = true;
});

// form validation for input.

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
    username.style.border = "1px solid #f57261";
  } else if (emailValue == "") {
    emailError.classList.add("email-error");
    emailError.style.display = "block";
    email.style.border = "1px solid #f57261";
  } else if (githubValue === "") {
    githubError.classList.add("github-error");
    githubError.style.display = "block";
    github.style.border = "1px solid hsl(7, 88%, 67%)";
  } else {
    username.style.border = "";
    email.style.border = "";
    github.style.border = "";
    validetForminput = true;
    usernameError.style.display = "none";
    emailError.style.display = "none";
    githubError.style.display = "none";

    if (validetFormImg) {
      if (validetForminput) {
        alert("ticket was successfully generated");
      }
    }
  }
});

// ---------------------------------
