import './style.css'


AOS.init();

const produtos = document.querySelector(".produtos");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const total = produtos.children.length;
const visible = 3;

next.addEventListener("click", () => {
  if (index < total - visible) {
    index++;
    produtos.style.transform = `translateX(-${index * (100 / visible)}%)`;
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    produtos.style.transform = `translateX(-${index * (100 / visible)}%)`;
  }
});


