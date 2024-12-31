const iconMenu = document.querySelector('.icon-menu')
const iconClose = document.querySelector('.icon-close')
const mobileContainer = document.querySelector('.mobile-container')


iconMenu.addEventListener('click',()=>{
mobileContainer.style.display = ' block'
})


iconClose.addEventListener('click',()=>{
    mobileContainer.style.display = ' none'
    })


    window.addEventListener('resize', () => {
        if (window.innerWidth > 1650) { 
          mobileContainer.style.display = 'none';
        }
      });