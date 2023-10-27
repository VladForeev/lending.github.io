const nav = document.querySelector('nav');
const togler = document.querySelector('.togler');
togler.addEventListener('click',()=> {

    nav.classList.toggle('showflex')
} )
const accordiondesk = document.querySelectorAll('.accordion p')
const accordiontitle = document.querySelectorAll('.accordion h2')
const accordionnumber = document.querySelectorAll('.accordion-number')
accordiontitle.forEach((element, i) => {
    element.addEventListener('click',() =>{
        accordiondesk[i].classList.toggle('show')
        
    } )
});