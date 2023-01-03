
const images = document.querySelectorAll(".pr-1");

images.forEach((image) => {
  {
    image.onmouseover = function () {
      document.querySelector("#header").style.filter = `blur(5px)`;
      document.querySelector("#hero").style.filter = `blur(5px)`;
      document.querySelector("#hero2").style.filter = `blur(5px)`;
    };
  }
});

images.forEach((image) => {
  {
    image.onmouseleave = function () {
      document.querySelector("#header").style.filter = `blur(0px)`;
      document.querySelector("#hero").style.filter = `blur(0px)`;
      document.querySelector("#hero2").style.filter = `blur(0px)`;
    };
  }
});

