"use strict";
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
headerWork.onclick = () => {
    //@ts-ignore
    window.location = './';
};
notBlur.forEach(item => item.onmouseover = () => {
    overlay.classList.add('backdrop-brightness-[.2]', 'backdrop-blur-sm', 'backdrop-contrast-[0.9]');
    if (item === headerWork)
        return;
    thirdSection.classList.add('opacity');
});
notBlur.forEach(item => item.onmouseleave = () => {
    overlay.classList.remove('backdrop-brightness-[.2]', 'backdrop-blur-sm', 'backdrop-contrast-[0.9]');
    if (item === headerWork)
        return;
    thirdSectionEmailSide.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => thirdSection.classList.remove('opacity'), 400);
});
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
    nugsSection.style.setProperty('--translate', (`0px`));
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
