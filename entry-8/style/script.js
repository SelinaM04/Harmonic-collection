document.addEventListener('DOMContentLoaded', () => {

    const navItems = document.querySelectorAll('#navigation ul li');
    const mainContentTitle = document.querySelector('.main-content h1'); 
    const mainNav = document.querySelector('#navigation');

  
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1; 
        }, index * 500);
    });

    const totalDelay = navItems.length * 500 + 1000;

   
    setTimeout(() => {
        mainContentTitle.style.opacity = 1; 
    }, totalDelay);

    
    setTimeout(() => {
        mainNav.style.opacity = 1;
    }, 2000); 
});



