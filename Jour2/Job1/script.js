function citation() {
    let txt = document.getElementById("citation").textContent;
    console.log(txt);
}

let button = document.getElementById("button");
button.addEventListener('click', citation);