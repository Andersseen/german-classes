const LinkLabel = document.querySelectorAll('.label__link')

const header = document.querySelector('.page__header')
let headerHeigth = header.scrollHeight

const coverLabel = document.querySelector('.cover__label')

const aboutLabel = document.querySelector('.about__label')

const yoLabel = document.querySelector('.yo__label')

const pricingLabel = document.querySelector('.pricing__label')

const contactLabel = document.querySelector('.contact__label')



window.onscroll = () => {

    let coverContainer = document.querySelector('.cover__container').scrollHeight - 1;
    let aboutContainer = document.querySelector('.about__container').scrollHeight
    let yoContainer = document.querySelector('.yo__container').scrollHeight
    let pricingContainer = document.querySelector('.pricing__container').scrollHeight
    let contactContainer = document.querySelector('.contact__container').scrollHeight

    let footerContainer = document.querySelector('.page__footer').scrollHeight

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

    if (scrollTop >= (coverContainer + aboutContainer + yoContainer)) {
        yoLabel.classList.add('fixed')
    } else {
        yoLabel.classList.remove('fixed')
    };

    if (scrollTop >= (coverContainer + aboutContainer + yoContainer + pricingContainer)) {
        pricingLabel.classList.add('fixed')
    } else {
        pricingLabel.classList.remove('fixed')
    };


    if (scrollTop >= (coverContainer + aboutContainer + yoContainer + pricingContainer + contactContainer)) {
        contactLabel.classList.add('fixed')
    } else {
        contactLabel.classList.remove('fixed')
    };

    // onscroll transform footer
    let heightNesesary = (coverContainer + aboutContainer + yoContainer + pricingContainer + contactContainer) - (footerContainer - 200);
    console.log(heightNesesary);
    console.log(window.scrollY);

    let footerBlocks = document.querySelectorAll('.footer__block')

    if (window.scrollY >= heightNesesary) {
        footerBlocks.forEach(el => {
            el.classList.add('active');
        })
    } else {
        footerBlocks.forEach(el => {
            el.classList.remove('active');
        })
    }



}


const findSection = (e) => {

    let coverContainer = document.querySelector('.cover__container').scrollHeight
    let aboutContainer = document.querySelector('.about__container').scrollHeight
    let yoContainer = document.querySelector('.yo__container').scrollHeight
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
    if (x.className == 'yo__label label__link fixed') {
        window.scrollTo({
            top: coverContainer + aboutContainer,
            behavior: 'smooth',
        });
    }
    if (x.className == 'pricing__label label__link fixed') {
        window.scrollTo({
            top: coverContainer + aboutContainer + yoContainer,
            behavior: 'smooth',
        });
    }
    if (x.className == 'contact__label label__link fixed') {
        window.scrollTo({
            top: coverContainer + aboutContainer + yoContainer + pricingContainer + 5,
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
    let yoContainer = document.querySelector('.yo__container').scrollHeight
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
    if (findLink.dataset.goto == '.yo') {
        window.scrollTo({
            top: coverContainer + aboutContainer,
            behavior: 'smooth',
        });
        e.preventDefault();
    }
    if (findLink.dataset.goto == '.pricing') {
        window.scrollTo({
            top: coverContainer + aboutContainer + yoContainer,
            behavior: 'smooth',
        });
        e.preventDefault();
    }
    if (findLink.dataset.goto == '.contact') {
        window.scrollTo({
            top: coverContainer + aboutContainer + yoContainer + pricingContainer + 5,
            behavior: 'smooth',
        });
        e.preventDefault();
    }
}


menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
});


