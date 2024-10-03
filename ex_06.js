document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("resize", function () {
        alert("Size matters")
        })
    let trouse = document.querySelector('img[src="../Iphone22.png"]')
    if (trouse) {
    trouse.addEventListener("mouseover", function () {
         alert("Pretty, isn't it?")
            })
        }
    })