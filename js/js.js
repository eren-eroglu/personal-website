const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector(".mouse-dot");

// Mouse Circle

const mouseCircleFn = (x,y) => {
    mouseCircle.style.cssText = `top:${y}px; left:${x}px; opacity:1`;
    mouseDot.style.cssText = `top:${y}px; left:${x}px; opacity:1`;
};

document.body.addEventListener('mousemove',(e) => {
    let x = e.clientX;
    let y = e.clientY;
    document.title = "Eren Eroglu - Developer"
    mouseCircleFn(x,y)
})

document.body.addEventListener('mouseleave',() => {
    document.title = 'Come here!'
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
})
// End of Mouse Circle

