const menuBtn=document.querySelector('#menu');
const list=document.querySelector('#action');


menuOpen=false;
menuBtn.addEventListener('click',( ) =>{
    handl();
});

function handl(){
    
    menuBtn.classList.toggle("is-active");
    list.classList.toggle("is-active");
}
