const menuBtn = document.querySelector('.bar');
const closeBtn = document.querySelector('.cancel');
const navBar = document.querySelector('.navigation');

menuBtn.addEventListener('click',() => {
    navBar.style.right = "0";
});

closeBtn.addEventListener('click',() => {
    navBar.style.right = "-20em";
});

const formCont = document.querySelector('.contact-cont');
const formEl = document.querySelectorAll('.form-items');
const subBtn = document.querySelector('input-btn');
// console.log(formCont);

formCont.addEventListener("click",(e)=> {

    // console.log(e.target.name);
    const inputName = e.target.name;

    if(inputName) {
        console.log("clicked");
        formEl.forEach((item)=> {
            // console.log(item);
            item.classList.remove("live");
        })
    }
}
);