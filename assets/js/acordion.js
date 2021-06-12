const LinkLabel = document.querySelectorAll('.label__link')

const header = document.querySelector('.page__header')
let headerHeigth = header.scrollHeight

const coverLabel = document.querySelector('.cover__label')

const aboutLabel = document.querySelector('.about__label')

const pricingLabel = document.querySelector('.pricing__label')

const contactLabel = document.querySelector('.contact__label')



window.onscroll = () => {

    let coverContainer = document.querySelector('.cover__container').scrollHeight
    let aboutContainer = document.querySelector('.about__container').scrollHeight
    let pricingContainer = document.querySelector('.pricing__container').scrollHeight
    let contactContainer = document.querySelector('.contact__container').scrollHeight

    let scrollTop = window.scrollY

    if (scrollTop >= coverContainer) {
        coverLabel.classList.add('fixed')
    } else {
        coverLabel.classList.remove('fixed')
    };

    if (scrollTop >= (coverContainer + aboutContainer)) {
        aboutLabel.classList.add('fixed')
    } else {
        aboutLabel.classList.remove('fixed')
    };

    if (scrollTop >= (coverContainer + aboutContainer + pricingContainer)) {
        pricingLabel.classList.add('fixed')
    } else {
        pricingLabel.classList.remove('fixed')
    };


    if (scrollTop >= (coverContainer + aboutContainer + pricingContainer + contactContainer)) {
        contactLabel.classList.add('fixed')
    } else {
        contactLabel.classList.remove('fixed')
    };


}


const findSection = (e) => {

    let coverContainer = document.querySelector('.cover__container').scrollHeight
    let aboutContainer = document.querySelector('.about__container').scrollHeight
    let pricingContainer = document.querySelector('.pricing__container').scrollHeight

    let x = e.toElement

    if (x.className == 'cover__label label__link fixed') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    if (x.className == 'about__label label__link fixed') {
        window.scrollTo({
            top: coverContainer,
            behavior: 'smooth',
        });
    }
    if (x.className == 'pricing__label label__link fixed') {
        window.scrollTo({
            top: coverContainer + aboutContainer,
            behavior: 'smooth',
        });
    }
    if (x.className == 'contact__label label__link fixed') {
        window.scrollTo({
            top: coverContainer + aboutContainer + pricingContainer + 5,
            behavior: 'smooth',
        });
    }

}



LinkLabel.forEach(el => {
    el.addEventListener('click', findSection)
})



//  LAZY SCROOL 



const menuLinks = document.querySelectorAll('.menu__link');


const onMenuLinkClick = (e) => {

    let coverContainer = document.querySelector('.cover__container').scrollHeight
    let aboutContainer = document.querySelector('.about__container').scrollHeight
    let pricingContainer = document.querySelector('.pricing__container').scrollHeight


    let findLink = e.toElement

    if (findLink.dataset.goto == '.cover') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        e.preventDefault();
    }
    if (findLink.dataset.goto == '.about') {
        window.scrollTo({
            top: coverContainer,
            behavior: 'smooth',
        });
        e.preventDefault();
    }
    if (findLink.dataset.goto == '.pricing') {
        window.scrollTo({
            top: coverContainer + aboutContainer,
            behavior: 'smooth',
        });
        e.preventDefault();
    }
    if (findLink.dataset.goto == '.contact') {
        window.scrollTo({
            top: coverContainer + aboutContainer + pricingContainer + 5,
            behavior: 'smooth',
        });
        e.preventDefault();
    }
}


menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
});
