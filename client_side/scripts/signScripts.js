let info = document.location.search.replace(/^.*?\=/, "");
// localStorage.getItem('isSingIn');
console.log(info);
function startPage(isSignIn) {
    if (isSignIn == "true") {
        let signIn = document.getElementById("sign-in");
        let signUp = document.getElementById("sign-up");
        let background = document.getElementById("background-btn");
        let formSignUp = document.getElementById("formSignUp");
        let formSignIn = document.getElementById("formSignIn");
        let googleBtn = document.getElementById("mssg-google");
        background.style.right = "92px";
        formSignIn.style.display = "block";
        formSignUp.style.display = "none";
        signUp.style.color = "#595959";
        signIn.style.color = "white";
        googleBtn.innerHTML = "Sign In With Google";
    }
    else {
        let signIn = document.getElementById("sign-in");
        let signUp = document.getElementById("sign-up");
        let background = document.getElementById("background-btn");
        let formSignUp = document.getElementById("formSignUp");
        let formSignIn = document.getElementById("formSignIn");
        let googleBtn = document.getElementById("mssg-google");
        background.style.right = "4px";
        formSignUp.style.display = "block";
        formSignIn.style.display = "none";
        signIn.style.color = "#595959";
        signUp.style.color = "white";
        googleBtn.innerHTML = "Sign Up With Google";
    }
}
startPage(info);
function clickSignButtons() {
    let signIn = document.getElementById("sign-in"); 
    let signUp = document.getElementById("sign-up");
    let background = document.getElementById("background-btn");
    let formSignUp = document.getElementById("formSignUp");
    let formSignIn = document.getElementById("formSignIn");
    let googleBtn = document.getElementById("mssg-google");
    let submit = document.getElementById("sign-google");
    signIn.addEventListener("click",function () {
        background.style.right = "92px";
        formSignIn.style.display = "block";
        formSignUp.style.display = "none";
        signUp.style.color = "#595959";
        signIn.style.color = "white";
        googleBtn.innerHTML = "Sign In With Google";
    });
    signUp.addEventListener("click",function () {
        background.style.right = "4px";
        formSignUp.style.display = "block";
        formSignIn.style.display = "none";
        signIn.style.color = "#595959";
        signUp.style.color = "white";
        googleBtn.innerHTML = "Sign Up With Google";
    });
    submit.addEventListener("click", function () {
        window.location = "../pages/dashboard.html";
    });
}
clickSignButtons();

function eyeConfig() {
    let viewIcon = "../assets/icons/view.svg";
    let hideIcon = "../assets/icons/visibility.svg";
    for (let index = 1; index <= 3; index++) {
        let eye = document.getElementById("eye" + index);
        let password = document.getElementById("password" + index);
        eye.addEventListener("click", function () {
            if (password.type == "password") {
                password.type = "text";
                eye.src = hideIcon;
            }
            else {
                password.type = "password";
                eye.src = viewIcon;
            }
        })

    }

}
eyeConfig();