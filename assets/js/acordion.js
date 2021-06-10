const LinkLabel = document.querySelectorAll('.label__link')

const header = document.querySelector('.page__header')
let headerHeigth = header.scrollHeight

const coverSection = document.querySelector('.cover')
const coverLabel = document.querySelector('.cover__label')
let coverHeigth = coverSection.scrollHeight
let coverLabelHeigth = coverLabel.scrollHeight
let coverHeigthNecessary = coverHeigth - coverLabelHeigth

const aboutSection = document.querySelector('.about')
const aboutLabel = document.querySelector('.about__label')
let aboutHeigth = aboutSection.scrollHeight
let aboutLabelHeigth = aboutLabel.scrollHeight
let aboutHeigthNecessary = aboutHeigth - aboutLabelHeigth

const pricingSection = document.querySelector('.pricing')
const pricingLabel = document.querySelector('.pricing__label')
let pricingrHeigth = pricingSection.scrollHeight
let pricingLabelHeigth = aboutLabel.scrollHeight
let pricingHeigthNecessary = pricingrHeigth - pricingLabelHeigth

const contactSection = document.querySelector('.contact')
const contactLabel = document.querySelector('.contact__label')
let contactHeigth = contactSection.scrollHeight
let contactLabelHeigth = aboutLabel.scrollHeight
let contactHeigthNecessary = contactHeigth - contactLabelHeigth


window.onscroll = () => {
    let scrollTop = window.scrollY

    if (scrollTop >= coverHeigthNecessary) {
        coverLabel.classList.add('fixed')
    } else {
        coverLabel.classList.remove('fixed')
    };

    if (scrollTop >= (coverHeigthNecessary + aboutHeigthNecessary)) {
        aboutLabel.classList.add('fixed')
    } else {
        aboutLabel.classList.remove('fixed')
    };

    if (scrollTop >= (coverHeigthNecessary + aboutHeigthNecessary + pricingHeigthNecessary)) {
        pricingLabel.classList.add('fixed')
    } else {
        pricingLabel.classList.remove('fixed')
    };


    if (scrollTop >= (coverHeigthNecessary + aboutHeigthNecessary + pricingHeigthNecessary + contactHeigthNecessary)) {
        contactLabel.classList.add('fixed')
    } else {
        contactLabel.classList.remove('fixed')
    };


}


const findSection = (e) => {
    let x = e.toElement
    console.log(x);

    if (x.className == 'cover__label label__link fixed') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            speed: 5000,
        });
    }
    if (x.className == 'about__label label__link fixed') {
        window.scrollTo({
            top: coverHeigthNecessary,
            behavior: 'smooth',
        });
    }
    if (x.className == 'pricing__label label__link fixed') {
        window.scrollTo({
            top: coverHeigthNecessary + aboutHeigthNecessary,
            behavior: 'smooth',
        });
    }
    if (x.className == 'contact__label label__link fixed') {
        window.scrollTo({
            top: coverHeigthNecessary + aboutHeigthNecessary + pricingHeigthNecessary,
            behavior: 'smooth',
        });
    }

}



LinkLabel.forEach(el => {
    el.addEventListener('click', findSection)
})
