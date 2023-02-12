const images = document.querySelectorAll(".pr-1");

images.forEach((image) => {
  {
    image.onmouseover = function () {
      document.querySelector("#header").style.filter = `blur(5px)`;
      document.querySelector("#hero").style.filter = `blur(5px)`;
      
    };
  }
});

images.forEach((image) => {
  {
    image.onmouseleave = function () {
      document.querySelector("#header").style.filter = `blur(0px)`;
      document.querySelector("#hero").style.filter = `blur(0px)`;
    
    };
  }
});

// Toggle Function
const navbar = document.querySelector(".navbar");
const anchors = document.querySelectorAll("a");
const section = document.getElementById("hero");
const section2 = document.getElementById("hero2");
const h5s = document.querySelectorAll("h5");
const hero2 = document.getElementById("hero2");
const spans = document.querySelectorAll('span');
const toggleBtn = document.getElementById("toggleBtn");
const paragraphs = document.querySelectorAll('p')
const resim_ikis = document.querySelectorAll('.resim_iki')
toggleBtn.addEventListener("click", darkMode);

function darkMode() {
  document.body.classList.toggle("bg-dark");
  navbar.classList.toggle("bg-dark");
  anchors.forEach((anchor) => {
    anchor.classList.toggle("text-white");
  });
  hero.classList.toggle("bg-dark");
  
  hero2.classList.toggle('text-white')
  hero2.classList.toggle('bg-dark')
  h5s.forEach((h5) => {
    h5.classList.toggle("text-white");
  });
  spans.forEach((span) => {
    span.classList.toggle('text-white')
  })
  paragraphs.forEach((p) => {
    p.classList.toggle('text-white')
  })
  resim_ikis.forEach((resim) => {
    resim.classList.toggle('bg-dark')
  })
}
