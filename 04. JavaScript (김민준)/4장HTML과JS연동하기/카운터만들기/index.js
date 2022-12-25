const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
  number.innerText = +number.innerText + 1;
};

decrease.onclick = () => {
  number.innerText = +number.innerText - 1;
};
