"use strict";
const firstSectionImage = document.querySelector('#first-section--image');
const firstSectionFirstP = document.querySelector('#first-section--first-p');
const firstSectionSecondP = document.querySelector('#first-section--second-p');
const secondSection = document.querySelector('#second-section');
let windowHeight = window.innerHeight;
window.onresize = () => windowHeight = window.innerHeight;
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
let showElement = (theElement, theClassNameOrCssVariableName, variableChangedValue = 'none') => {
    // return windowHeight - elementHeight > 130 ? 'show' : 'hide';
    let calculations = windowHeight - theElement.getBoundingClientRect().top;
    switch (variableChangedValue) {
        case 'none':
            calculations > 130 ? theElement.classList.add(theClassNameOrCssVariableName) :
                calculations < 0 ? theElement.classList.remove(theClassNameOrCssVariableName) :
                    '';
            break;
        default:
            theElement.style.setProperty(theClassNameOrCssVariableName, variableChangedValue);
            break;
    }
};
//theElement.style.setProperty('--animation', 'increaseWidth 0.6s ease-out forwards');
window.onscroll = () => {
    showElement(firstSectionFirstP, 'first-p-animation');
    showElement(firstSectionSecondP, 'second-p-animation');
    showElement(secondSection, '--animation', 'increaseWidth 0.6s ease-out forwards');
};
