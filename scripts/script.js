const dropDown = document.getElementsByClassName('dropDown');
const bell = document.getElementById('bell');
const circle = document.getElementsByClassName('circle');

bell.addEventListener("click", ()=>{
  dropDown[0].classList.toggle("show");
  circle[0].style.opacity ="0";
});
