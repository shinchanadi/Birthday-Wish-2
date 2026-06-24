window.onload = () => {

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

};

const icon = document.getElementById("messageIcon");
const passwordBox = document.getElementById("passwordBox");

icon.addEventListener("click", () => {
    passwordBox.style.display = "block";
});

function checkPassword(){

    const password =
        document.getElementById("secretPassword").value;

    if(password === "monya23"){

        passwordBox.style.display = "none";

        document.getElementById("loveLetter").style.display =
            "block";

    } else {

        alert("Wrong password 😝");
    }
}