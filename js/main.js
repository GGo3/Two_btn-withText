const btn1El = document.querySelector('.btn1');
const btn2El = document.querySelector('.btn2');
const textEl = document.querySelector('.hello');

const switchBtn = () => {
  if (btn2El.classList.length > 1) {
    btn2El.classList.add('grey');
  }
  btn2El.classList.add('switcher');
}
btn1El.addEventListener('click', switchBtn);

const switchText = () => {
  textEl.classList.toggle('switcher');
}
btn2El.addEventListener('click', switchText);
