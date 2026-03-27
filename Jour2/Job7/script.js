let bouton = document.getElementById("toggle-theme");
let body = document.getElementById("body");

function changeTheme() {
    if(body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    
}


bouton.addEventListener("click", changeTheme);
