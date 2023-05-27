function Inia(){
document.getElementById("white").style.display = 'none'
}
function white(){
document.body.style.backgroundColor = "white";
document.body.style.color ="black"
document.getElementById("welcome").style.backgroundColor = "0deg, linear-gradient(#60ebeb 0%, #27ae60 100%);"
document.getElementById("line").style.backgroundColor="black";
document.getElementById("white").style.display = 'none'
document.getElementById("black").style.display = 'unset'
document.getElementById("black").style.textAlign = 'center'
document.getElementById("LinkOfYoutube").style.mixBlendMode='difference';
}
function black(){
document.body.style.backgroundColor = "black";
document.body.style.color ="white"
document.getElementById("line").style.backgroundColor="white";
document.getElementById("welcome").style.backgroundColor = 'linear-gradient(to right, #22c1c3 0%, #2d38fd 100%)';
document.getElementById("black").style.display = 'none'
document.getElementById("white").style.display = 'unset'
document.getElementById("white").style.textAlign = 'center'
document.getElementById("LinkOfYoutube").style.mixBlendMode='difference';
}