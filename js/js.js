const main = document.querySelector('.main-text').textContent;
console.log(main);

const contact = document.querySelector('.button-parent');

contact.addEventListener("click", myFunction);

function myFunction(){
    document.querySelector('.main-text').textContent = 'contact'
    document.querySelector('.sub-text').textContent = 'check out my social media'
    const aiki = document.createElement("a");
    document.querySelector('.last-text').textContent = 
    aiki.setAttribute("class", "aiki");
    aiki.setAttribute("class", "bx bxl-twitter");
    aiki.setAttribute("href", "https://mobile.twitter.com/35ereneroglu");
    document.querySelector('.last-text').appendChild(aiki)
  
    
    
   
}