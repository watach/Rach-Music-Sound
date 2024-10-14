window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; i++)
        bars.forEach(each => each.style.animationDuration = `${Math.random()*15}s`);
});
/****************************************/
const buttons = document.querySelectorAll('.btn'); 
const previews=document.querySelectorAll('.pr');
const about=document.querySelector('.about');
const music=document.querySelector('.music');
const sound=document.querySelector('.sound');
const contact=document.querySelector('.contact');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('clicked'));
    button.classList.add('clicked');
    previews.forEach(pr=> pr.classList.remove('active'));
    const buttonText = button.textContent;
    if (buttonText==='About me') {
        about.classList.add('active');   
    }
    if (buttonText==="Music") {
        music.classList.add('active');   
    }
    if (buttonText==="Sound Engineering") {
        sound.classList.add('active');   
    }
    if (buttonText==="Contact me") {
        contact.classList.add('active');   
    }
    
  });
});
