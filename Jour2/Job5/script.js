let footer = document.getElementById("footer");

function prctageScroll() {
    let top = window.pageYOffset;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let prctage = (top / (scrollHeight - clientHeight)) * 100;

    if (prctage < 25) {
        footer.style.backgroundColor = "yellow";
    } else if (prctage < 50) {
        footer.style.backgroundColor = "orange";
    } else if (prctage < 75) {
        footer.style.backgroundColor = "red";
    } else {
        footer.style.backgroundColor = "purple";
    }
}


window.addEventListener("scroll", prctageScroll);