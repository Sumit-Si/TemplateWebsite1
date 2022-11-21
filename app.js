const menuBtn = document.querySelector('.bar');
const closeBtn = document.querySelector('.cancel');
const navBar = document.querySelector('.navigation');

menuBtn.addEventListener('click',() => {
    navBar.style.right = "0";
});

closeBtn.addEventListener('click',() => {
    navBar.style.right = "-20em";
});