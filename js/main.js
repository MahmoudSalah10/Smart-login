let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function handleSignIn() {
    let loginEmail = loginEmailInput.value;
    let loginPassword = loginPasswordInput.value;

    if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
        swal({
            text: "Please fill the form",
        });
        return;
    }

    if (validateEmailAndPassword(loginEmail, loginPassword)) {
        window.location.href = "home.html";
    } else {
        swal({
            text: "Incorrect email or password", 
        });
    }
}

function validateEmailAndPassword(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            localStorage.setItem("userName", users[i].name);
            return true;
        }
    }
    return false;
}

loginBtn.addEventListener("click", function () {
    handleSignIn();
});

signupAnchor.addEventListener("click", function () {
    window.location.href = "signup.html";
});