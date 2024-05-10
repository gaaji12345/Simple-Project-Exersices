let arrow =document.getElementById("arrow");
window.addEventListener('scroll',()=>{
    let postion=window.scrollY;
    if (postion <=5){
        arrow.classList.toggle('fade-in')
        arrow.classList.toggle('fade-out')
    }
});