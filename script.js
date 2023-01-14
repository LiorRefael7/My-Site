"use strict";

let x = 0;
let color;
document.addEventListener("DOMContentLoaded", async () => {
    function changeColor() {
        if (x % 2 === 0) {
            color = "darkred";
        } else {
            color = "white";
        }

        button[0].style.color = color;
        button[1].style.color = color;
        button[2].style.color = color;

        x++;
    }

    function showAlert() {
        if (x === 1) {
            alert("Pay attention to the color of the Navigator")
        }
    }

    let button = document.querySelectorAll('li > a');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', changeColor)
        button[i].addEventListener('click', showAlert)

    }

})
