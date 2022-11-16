
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


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
