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
      console.log(e.target.result);
    });

    reader.readAsDataURL(selectfile);
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

removeImg.addEventListener("click", (e) => {
  displayImg.src = "./static/images/icon-upload.svg";
  displayBtnChanges.style.display = "none";
  imgDescr.style.display = "block";
  buttonAction = !buttonAction;
  e.stopPropagation();
});

// form validation for input.

const username = document.getElementById("username");
const email = document.getElementById("email");
const github = document.getElementById("github");
const submitForm = document.getElementById("submit-form");
const usernameError = document.getElementById("displayNone");
const emailError = document.getElementById("displayNoneemail");
const githubError = document.getElementById("displayNonegithub");
const ticketId = document.getElementById("ticket_id");

const minLengh = 4;
const displayError = false;

usernameError.style.display = "none";
emailError.style.display = "none";
githubError.style.display = "none";

submitForm.addEventListener("submit", (e) => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const githubValue = github.value.trim();

  if (!usernameValue || usernameValue.length <= minLengh) {
    usernameError.classList.add("username-error");
    usernameError.style.display = "block";
    username.style.border = "1px solid #f57261";
    e.preventDefault();
  } else {
    username.style.border = "";
    usernameError.style.display = "none";
  }
  if (!emailValue) {
    emailError.classList.add("email-error");
    emailError.style.display = "block";
    email.style.border = "1px solid #f57261";
    e.preventDefault();
  } else {
    email.style.border = "";
    emailError.style.display = "none";
  }
  if (!githubValue) {
    githubError.classList.add("github-error");
    githubError.style.display = "block";
    github.style.border = "1px solid #f57261";
    e.preventDefault();
  } else {
    github.style.border = "";
    githubError.style.display = "none";
  }
  if (usernameValue && email && github) {
    validetForminput = true;
    if (validetFormImg) {
      if (validetForminput) {
        return;
      }
    } else {
      imgError.textContent = "Please upload your avatar";
      imgError.style.color = "#f57261";
      e.preventDefault();
    }
  }
});

function ticketIds(length) {
  let uid = Math.floor(Math.random() * length) + 1;
  return uid;
}

let randoNumber = ticketIds(parseInt(9999));
ticketId.value = randoNumber;

// ---------------------------------
