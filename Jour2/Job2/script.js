function showhide() {
    if(document.getElementById("article")) {
        let ancienArticle = document.getElementById("article");
        ancienArticle.remove();

    } else {
        let nvlArticle = document.createElement("article");
        nvlArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        nvlArticle.setAttribute("id", "article");
        document.body.appendChild(nvlArticle);
    }
}

let button = document.getElementById("button");
button.addEventListener('click', showhide);