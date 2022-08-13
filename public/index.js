"use strict";
const container = document.querySelector('#container');
const firstSectionImage = document.querySelector('#first-section--image');
const firstSectionFirstP = document.querySelector('#first-section--first-p');
const firstSectionSecondP = document.querySelector('#first-section--second-p');
const secondSection = document.querySelector('#second-section');
const clientNames = document.querySelectorAll('.clients--name');
const secondSectionHeader = document.querySelector('#second-section--header');
const thirdSection = document.querySelector('#third-section');
const emailField = document.querySelector('#nugs--input');
const emailSubmitBtn = document.querySelector('#nugs--submit-btn');
const neverMind = document.querySelector('#neverMind');
const nugsSection = document.querySelector('#nugs-section');
const nugsLogo = document.querySelector('.nugs-logo');
const nugsLogoThirdSection = document.querySelector('.nugs-logo-third-section');
const notBlur = document.querySelectorAll('.no-blur');
const headerWork = document.querySelector('#header--work');
const overlay = document.querySelector('#overlay');
const thirdSectionEmailSide = document.querySelector('#third-section--email-side');
const clientNamesArr = [...clientNames];
let windowHeight = window.innerHeight;
window.onresize = () => windowHeight = window.innerHeight;
notBlur.forEach(item => item.onmouseover = () => {
    overlay.classList.add('backdrop-brightness-[.2]', 'backdrop-blur-sm', 'backdrop-contrast-[0.9]');
    if (item === headerWork)
        return;
    thirdSection.classList.add('opacity');
});
// thirdSectionEmailSide.onmousemove = e =>{
// 	let xValue = `${((e.offsetX / screen.width) * 360) /*-20*//*(e.offsetX / 12)*/}deg`;
// 	let yValue = `${((e.offsetY / windowHeight) * 360) /*-20*/ (e.offsetY / 12)}deg`;
// 	console.log(e.offsetX, e.offsetY,thirdSectionEmailSide.getBoundingClientRect());
// 	// thirdSectionEmailSide.style.transform = `rotateX(${xValue}) rotateY(${yValue})`;
// }
notBlur.forEach(item => item.onmouseleave = () => {
    overlay.classList.remove('backdrop-brightness-[.2]', 'backdrop-blur-sm', 'backdrop-contrast-[0.9]');
    if (item === headerWork)
        return;
    thirdSectionEmailSide.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => thirdSection.classList.remove('opacity'), 400);
});
let imageSrcName = ['vr.jpg', 'uhh.jpg', 'bridge.jpg', 'road-and-trees.jpg', 'sitting-football.jpg', 'holding-beer.jpg', 'hotel.jpg', 'person-staring.jpg', 'laptops.jpg', 'beer-bottle.jpg', 'eatery.jpg', 'running-football.jpg'];
let num = 0;
//Loop through the array
//If the number is less than the content in the array,
//Then changed the picture and add one to the number
//If not, just change the picture to the first one and make number variable to be 1
let changeNumber = () => {
    if (num < imageSrcName.length) {
        firstSectionImage.setAttribute('src', `./images/${imageSrcName[num]}`);
        return num++;
    }
    ;
    firstSectionImage.setAttribute('src', `./images/${imageSrcName[0]}`);
    return num = 1;
};
// setInterval(() => changeNumber(), 250);
let showElement = (theElement, theClassNameOrCssVariableName, value = 130, variableChangedValue = 'none') => {
    let calculations = windowHeight - theElement.getBoundingClientRect().top;
    switch (variableChangedValue) {
        case 'none':
            calculations > value ? theElement.classList.add(theClassNameOrCssVariableName) :
                calculations < 0 ? theElement.classList.remove(theClassNameOrCssVariableName) :
                    '';
            break;
        default:
            calculations > value ? theElement.style.setProperty(theClassNameOrCssVariableName, variableChangedValue) :
                theElement.style.setProperty(theClassNameOrCssVariableName, 'none');
            break;
    }
};
window.onscroll = () => {
    showElement(firstSectionFirstP, 'first-p-animation');
    showElement(firstSectionSecondP, 'second-p-animation');
    showElement(secondSection, '--second-section-before-animation', 10, 'increaseWidth 0.6s ease-out forwards');
    clientNames.forEach(item => {
        showElement(item, 'clients--name--animation', 10);
    });
    showElement(secondSectionHeader, 'second-section-header-animation', 10);
    showElement(secondSection, '--second-section-after-animation', parseInt(getComputedStyle(secondSection).getPropertyValue('height')), 'increaseWidth 0.6s ease-out forwards');
    showElement(thirdSection, 'second-p-animation', 150);
};
const useRegex = (input) => {
    let regex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    regex.test(input) ? emailSubmitBtn.className = 'canSubmit' : emailSubmitBtn.classList.remove('canSubmit');
};
useRegex(emailField.value);
emailField.onkeyup = () => useRegex(emailField.value);
neverMind.onclick = () => checkNugsClass();
nugsLogoThirdSection.onclick = () => {
    document.documentElement.classList.add('pointer-events-none');
    document.documentElement.classList.add('overflow-y-hidden');
    nugsSection.style.setProperty('--nugs-section-height', (`-0px`));
    nugsSection.style.setProperty('--translate1', (`0px`));
    nugsSection.className = 'animation';
};
document.documentElement.onclick = e => {
    //If we are clicking on the nugs logo or inside the nugs section, don't do anything
    if (e.composedPath().includes(nugsLogoThirdSection) || e.composedPath().includes(nugsSection))
        return;
    //But if we click outside the nugs section, the close it
    checkNugsClass();
};
nugsSection.style.setProperty('--nugs-section-height', (`-${getComputedStyle(nugsSection).getPropertyValue('height')}`));
function checkNugsClass() {
    nugsSection.classList.contains('animation') ?
        (document.documentElement.classList.remove('pointer-events-none'),
            document.documentElement.classList.remove('overflow-y-hidden'),
            nugsSection.style.setProperty('--nugs-section-height', (`-${getComputedStyle(nugsSection).getPropertyValue('height')}`)),
            nugsSection.style.setProperty('--translate1', (`24px`)),
            setTimeout(() => nugsSection.classList.remove('animation'), 200)) : '';
}
