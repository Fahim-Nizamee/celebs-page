const menuHamburger = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

function clicked(value)
{
    if(value == 1)
    {
        document.getElementById('1').style.backgroundColor = "#919191"
        document.getElementById('11').style.color = "black"
        document.getElementById('2').style.backgroundColor = "#4d4d4d"
        document.getElementById('22').style.color = "white"
        document.getElementById('3').style.backgroundColor = "#4d4d4d"
        document.getElementById('33').style.color = "white"
        document.getElementById('4').style.backgroundColor = "#4d4d4d"
        document.getElementById('44').style.color = "white"
        document.getElementById('5').style.backgroundColor = "#4d4d4d"
        document.getElementById('55').style.color = "white"
    }
    if(value == 2)
    {
        document.getElementById('1').style.backgroundColor = "#4d4d4d"
        document.getElementById('11').style.color = "white"
        document.getElementById('2').style.backgroundColor = "#919191"
        document.getElementById('22').style.color = "black"
        document.getElementById('3').style.backgroundColor = "#4d4d4d"
        document.getElementById('33').style.color = "white"
        document.getElementById('4').style.backgroundColor = "#4d4d4d"
        document.getElementById('44').style.color = "white"
        document.getElementById('5').style.backgroundColor = "#4d4d4d"
        document.getElementById('55').style.color = "white"
    }
    if(value == 3)
    {
        document.getElementById('1').style.backgroundColor = "#4d4d4d"
        document.getElementById('11').style.color = "white"
        document.getElementById('2').style.backgroundColor = "#4d4d4d"
        document.getElementById('22').style.color = "white"
        document.getElementById('3').style.backgroundColor = "#919191"
        document.getElementById('33').style.color = "black"
        document.getElementById('4').style.backgroundColor = "#4d4d4d"
        document.getElementById('44').style.color = "white"
        document.getElementById('5').style.backgroundColor = "#4d4d4d"
        document.getElementById('55').style.color = "white"
    }
    if(value == 4)
    {
        document.getElementById('1').style.backgroundColor = "#4d4d4d"
        document.getElementById('11').style.color = "white"
        document.getElementById('2').style.backgroundColor = "#4d4d4d"
        document.getElementById('22').style.color = "white"
        document.getElementById('3').style.backgroundColor = "#4d4d4d"
        document.getElementById('33').style.color = "white"
        document.getElementById('4').style.backgroundColor = "#919191"
        document.getElementById('44').style.color = "black"
        document.getElementById('5').style.backgroundColor = "#4d4d4d"
        document.getElementById('55').style.color = "white"
    }
    if(value == 5)
    {
        document.getElementById('1').style.backgroundColor = "#4d4d4d"
        document.getElementById('11').style.color = "white"
        document.getElementById('2').style.backgroundColor = "#4d4d4d"
        document.getElementById('22').style.color = "white"
        document.getElementById('3').style.backgroundColor = "#4d4d4d"
        document.getElementById('33').style.color = "white"
        document.getElementById('4').style.backgroundColor = "#4d4d4d"
        document.getElementById('44').style.color = "white"
        document.getElementById('5').style.backgroundColor = "#919191"
        document.getElementById('55').style.color = "black"
    }
}