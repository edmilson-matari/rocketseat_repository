window.addEventListener("load", () => {
    let switchButton = document.getElementById("switch");
    let allWindow = document.documentElement;
    let switchPhoto = document.getElementById("profile-photo");
    let verifier = 0;
    switchButton.onclick = () => {
        allWindow.setAttribute("class", "light");
        switchPhoto.setAttribute("src", "assets/avatar-light.png");
        verifier++;
        if (verifier == 2) {
            allWindow.removeAttribute("class");
            switchPhoto.setAttribute("src", "assets/avatar.png");
            verifier = 0;
        }
    }
})
//allWindow.classList.toggle("light");