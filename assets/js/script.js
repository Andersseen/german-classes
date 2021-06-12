//MENU BURGER

const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


//  LAZY SCROOL 
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener('click', onMenuLinkClick);
//     });

//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
//             console.log(gotoBlock.getBoundingClientRect());

//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();

//         }
//     }
// };