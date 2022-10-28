

// Mouse Circle
const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x,y) => {
    mouseCircle.style.cssText = `top:${y}px; left:${x}px; opacity:1`;
    mouseDot.style.cssText = `top:${y}px; left:${x}px; opacity:1`;
};

document.body.addEventListener('mousemove',(e) => {
    let x = e.clientX;
    let y = e.clientY;
    document.title = "Eren Eroglu - Developer"
    mouseCircleFn(x,y)

    animateCircles(e,x,y)
})

document.body.addEventListener('mouseleave',() => {
    document.title = 'Come here!'
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
})
// End of Mouse Circle

// Animated Circles

const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');

let mX = 0;
let mY = 0;
const z = 50;

const animateCircles = (e,x,y) => {

    if(x < mX){
        circles.forEach(circle => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    }else if( x > mX){
        circles.forEach(circle => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if(y<mY){
        circles.forEach(circle => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    }else if(y>mY){
        circles.forEach(circle => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }

    mX = e.clientX;
    mY = e.clientY;

}

//End of Animated Circles

// Main Button 



// End of Main Button


// About me Text

const aboutMeText = document.querySelector('.about-me-text')
const aboutMeTextContent = 
'I am a designer && I create high quality websites using HTML CSS JAVASCRIPT and REACT && contact me!';

Array.from(aboutMeTextContent).forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener('mouseenter',(e)=> {
        e.target.style.animation = "aboutMeTextAnim 10s infinite";
    })
});
// End ofAbout me Text