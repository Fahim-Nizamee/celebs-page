const menuHamburger = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

let color1 = "#3a2372";
let color2 = "#6b29ed";
let color3 = "#fff";
let color4 = "black";

function clicked(value)
{
    if(value == 1)
    {
        document.getElementById('1').style.backgroundColor = color2
        document.getElementById('11').style.color = color4
        document.getElementById('2').style.backgroundColor = color1
        document.getElementById('22').style.color = color3
        document.getElementById('3').style.backgroundColor = color1
        document.getElementById('33').style.color = color3
        document.getElementById('4').style.backgroundColor = color1
        document.getElementById('44').style.color = color3
        document.getElementById('5').style.backgroundColor = color1
        document.getElementById('55').style.color = color3
    }
    if(value == 2)
    {
        document.getElementById('1').style.backgroundColor = color1
        document.getElementById('11').style.color = color3
        document.getElementById('2').style.backgroundColor = color2
        document.getElementById('22').style.color = color4
        document.getElementById('3').style.backgroundColor = color1
        document.getElementById('33').style.color = color3
        document.getElementById('4').style.backgroundColor = color1
        document.getElementById('44').style.color = color3
        document.getElementById('5').style.backgroundColor = color1
        document.getElementById('55').style.color = color3
    }
    if(value == 3)
    {
        document.getElementById('1').style.backgroundColor = color1
        document.getElementById('11').style.color = color3
        document.getElementById('2').style.backgroundColor = color1
        document.getElementById('22').style.color = color3
        document.getElementById('3').style.backgroundColor = color2
        document.getElementById('33').style.color = color4
        document.getElementById('4').style.backgroundColor = color1
        document.getElementById('44').style.color = color3
        document.getElementById('5').style.backgroundColor = color1
        document.getElementById('55').style.color = color3
    }
    if(value == 4)
    {
        document.getElementById('1').style.backgroundColor = color1
        document.getElementById('11').style.color = color3
        document.getElementById('2').style.backgroundColor = color1
        document.getElementById('22').style.color = color3
        document.getElementById('3').style.backgroundColor = color1
        document.getElementById('33').style.color = color3
        document.getElementById('4').style.backgroundColor = color2
        document.getElementById('44').style.color = color4
        document.getElementById('5').style.backgroundColor = color1
        document.getElementById('55').style.color = color3
    }
    if(value == 5)
    {
        document.getElementById('1').style.backgroundColor = color1
        document.getElementById('11').style.color = color3
        document.getElementById('2').style.backgroundColor = color1
        document.getElementById('22').style.color = color3
        document.getElementById('3').style.backgroundColor = color1
        document.getElementById('33').style.color = color3
        document.getElementById('4').style.backgroundColor = color1
        document.getElementById('44').style.color = color3
        document.getElementById('5').style.backgroundColor = color2
        document.getElementById('55').style.color = color4
    }
}


function check()
{
    console.log(document.getElementById("darkmode-toggle").checked)
    
    if(document.getElementById("darkmode-toggle").checked == true)
    {
        document.body.classList.add('dark-theme')

    }
    if(document.getElementById("darkmode-toggle").checked == false)
    {
        document.body.classList.remove('dark-theme')
    }
}

