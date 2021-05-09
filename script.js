document.addEventListener("DOMContentLoaded",
function(){
    document.getElementById("menuBotton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
    })
});