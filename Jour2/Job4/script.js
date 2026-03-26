let txtArea = document.getElementById("keylogger");

function appuie(e) {
    if(document.activeElement === txtArea) {
        txtArea.value = txtArea.value + e.key
    } else {
        txtArea.value = txtArea.value + e.key
    }
}

document.addEventListener("keydown", appuie)


