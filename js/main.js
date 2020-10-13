const btn1El = document.querySelector('.btn1');
const btn2El = document.querySelector('.btn2');
const textEl = document.querySelector('.hello');

const switchBtn = () => {
  btn2El.classList.toggle('switcher');
  if (btn2El.classList.length > 0) {
    textEl.classList.remove('switcher');
  }
}
btn1El.addEventListener('click', switchBtn);

const switchText = () => {
  textEl.classList.toggle('switcher');
}
btn2El.addEventListener('click', switchText);
