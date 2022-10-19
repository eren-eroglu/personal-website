const main = document.querySelector('.main-text').textContent;
console.log(main);

const contact = document.querySelector('.button-parent');

contact.addEventListener("click", myFunction);

function myFunction(){
    document.querySelector('.main-text').textContent = 'contact'
    document.querySelector('.sub-text').textContent = 'check out my social media'
    
    const aiki = document.createElement("a");
    const auc = document.createElement("a");
    document.querySelector('.last-text').textContent = 
    aiki.setAttribute("class", "aiki bx bxl-twitter");
    aiki.setAttribute("href", "https://mobile.twitter.com/35ereneroglu");
    
    auc.setAttribute("class","auc bx bxl-github");
    auc.setAttribute("href", "https://github.com/eren-eroglu");
    document.querySelector('.last-text').appendChild(aiki);
    document.querySelector('.last-text').appendChild(auc);  
    
  
    
    
   
}