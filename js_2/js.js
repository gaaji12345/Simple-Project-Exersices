const grayHeart =document.querySelector("#grey-heart")
const redHeart =document.querySelector("#red-heart")
// console.log(redHeart)

grayHeart.addEventListener('click',()=>{
  redHeart.classList.add("animation");
    grayHeart.classList.add("fill-color");
});

redHeart.addEventListener('click',()=>{
  redHeart.classList.remove("animation");
  grayHeart.classList.remove("fill-color");
});