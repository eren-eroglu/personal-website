const main = document.querySelector('.main-text').textContent;
console.log(main);

const contact = document.querySelector('.button-parent');

contact.addEventListener("click", myFunction);

function myFunction(){
    document.querySelector('.main-text').textContent = 'contact'
    document.querySelector('.sub-text').textContent = 'check out my social media'
    
    
    
   
}