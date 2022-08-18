"use strict";
const container = document.querySelector('#container');
const firstSectionImage = document.querySelector('#first-section--image');
const firstSectionFirstP = document.querySelector('#first-section--first-p');
const firstSectionSecondP = document.querySelector('#first-section--second-p');
const secondSection = document.querySelector('#second-section');
const clientNames = document.querySelectorAll('.clients--name');
const secondSectionHeader = document.querySelector('#second-section--header');
const clientNamesArr = [...clientNames];
let windowHeight = window.innerHeight;
window.onresize = () => windowHeight = window.innerHeight;
headerWork.onclick = () => {
    //@ts-ignore
    window.location = 'work.html';
};
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
firstSectionImage.onclick = () => {
    //@ts-ignore
    window.location = 'work.html';
};
setInterval(() => changeNumber(), 250);
let showElement = (theElement, theClassName, value = 130, theCssVariableName = 'none', valueForCssVariable = 'none', defaultValueForCssVariable = 'none') => {
    let calculations = windowHeight - theElement.getBoundingClientRect().top;
    switch (true) {
        case theClassName === null:
            calculations > value ? theElement.style.setProperty(theCssVariableName, valueForCssVariable) :
                theElement.style.setProperty(theCssVariableName, defaultValueForCssVariable);
            break;
        case theClassName != null && calculations > value:
            //@ts-ignore
            theElement.classList.add(theClassName);
            theElement.style.setProperty(theCssVariableName, valueForCssVariable);
            break;
        case theClassName != null && calculations < 0:
            //@ts-ignore
            theElement.classList.remove(theClassName);
            theElement.style.setProperty(theCssVariableName, defaultValueForCssVariable);
            break;
    }
};
window.onscroll = () => {
    showElement(firstSectionFirstP, 'first-p-animation', 80, '--translate', '0px', '75px');
    showElement(firstSectionSecondP, 'second-p-animation', 80, '--translate', '0px', '75px');
    showElement(secondSection, null, 10, '--second-section-before-animation', 'increaseWidth 0.6s ease-out forwards');
    clientNames.forEach(item => {
        showElement(item, 'clients--name--animation', 10);
    });
    showElement(secondSectionHeader, 'second-section-header-animation', 10, '--translate', '0px', '75px');
    showElement(secondSection, null, parseInt(getComputedStyle(secondSection).getPropertyValue('height')), '--second-section-after-animation', 'increaseWidth 0.6s ease-out forwards');
    showElement(thirdSection, 'second-p-animation', 90, '--translate', '0px', '75px');
};
