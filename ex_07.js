document.addEventListener("DOMContentLoaded", function () { 
    document.querySelector(".cart-btn").textContent = "CHANGE COLOR"
    function lilouz () { 
        let tiplouf = "#" + Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.backgroundColor = tiplouf
    }
    document.querySelector(".cart-btn").addEventListener("click", lilouz)
})