function myFunction() {
    var sec = document.getElementById("section-overlay");
    if (sec.style.display === "none") {
        sec.style.display = "flex";
    } else {
        sec.style.display = "none";
    }
}