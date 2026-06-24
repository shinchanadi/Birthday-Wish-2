window.onload = () => {

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

};

const icon = document.getElementById("messageIcon");
const passwordBox = document.getElementById("passwordBox");
const music = document.getElementById("bgMusic");

music.volume = 0.3;

document.addEventListener("click", () => {

    if (music.paused) {
        music.play();
    }

}, { once: true });

icon.addEventListener("click", () => {
    passwordBox.style.display = "block";
});

function checkPassword() {

    const password =
        document.getElementById("secretPassword").value;

    if (password === "monya23") {

        passwordBox.style.display = "none";

        document.getElementById("loveLetter").style.display =
            "block";

    } else {

        alert("Wrong password 😝");
    }
}
