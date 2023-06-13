const close=document.getElementById('close');
const menuIcon=document.getElementById('menu-icon');
const navBar=document.getElementById('navbar');
if(menuIcon){
    menuIcon.addEventListener('click',function(){
        navBar.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',function(){
        navBar.classList.remove('active');
    })
}

var MainImg=document.getElementById("main-img");
var SmallImg=document.getElementsByClassName("s-img");
SmallImg[0].onclick =function(){
    MainImg.src = SmallImg[0].src;
}
SmallImg[1].onclick =function(){
    MainImg.src = SmallImg[1].src;
}
SmallImg[2].onclick =function(){
    MainImg.src = SmallImg[2].src;
}
SmallImg[3].onclick =function(){
    MainImg.src = SmallImg[3].src;
}