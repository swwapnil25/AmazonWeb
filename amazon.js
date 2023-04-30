// LightDarkMode

var icon = document.getElementById("icon");
icon.onclick = function(){
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
icon.src="sun.png"
}else{
icon.src="moon.png"
}
}
// Coupon

function loadCoupon(){
document.getElementById('coupon').style.visibility = 'visible';
document.getElementById('main').style.opacity = '0.3'
}
function closeCoupon(){
document.getElementById('coupon').style.visibility = 'hidden';
document.getElementById('main').style.opacity = '3'
}