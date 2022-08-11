const container = document.querySelector('#container') as HTMLDivElement;
const firstSectionImage = document.querySelector('#first-section--image') as HTMLImageElement;
const firstSectionFirstP = document.querySelector('#first-section--first-p') as HTMLParagraphElement;
const firstSectionSecondP = document.querySelector('#first-section--second-p') as HTMLParagraphElement;
const secondSection = document.querySelector('#second-section') as HTMLDivElement;
const clientNames = document.querySelectorAll('.clients--name') as NodeListOf<HTMLParagraphElement>;
const secondSectionHeader = document.querySelector('#second-section--header') as HTMLParagraphElement;
const thirdSection = document.querySelector('#third-section') as HTMLDivElement;
const emailField = document.querySelector('#nugs--input') as HTMLInputElement;
const emailSubmitBtn = document.querySelector('#nugs--submit-btn') as HTMLButtonElement;
const neverMind = document.querySelector('#neverMind') as HTMLParagraphElement;
const nugsSection = document.querySelector('#nugs-section') as HTMLDivElement;
const nugsLogo = document.querySelector('.nugs-logo') as HTMLImageElement;
const nugsLogoThirdSection = document.querySelector('.nugs-logo-third-section') as HTMLDivElement;
const clientNamesArr:HTMLParagraphElement[] = [...clientNames];

let windowHeight = window.innerHeight;
window.onresize = () => windowHeight = window.innerHeight;

let imageSrcName:string[] = ['vr.jpg', 'uhh.jpg', 'bridge.jpg', 'road-and-trees.jpg', 'sitting-football.jpg', 'holding-beer.jpg', 'hotel.jpg', 'person-staring.jpg', 'laptops.jpg', 'beer-bottle.jpg', 'eatery.jpg', 'running-football.jpg'];
let num:number = 0;

//Loop through the array
//If the number is less than the content in the array,
//Then changed the picture and add one to the number
//If not, just change the picture to the first one and make number variable to be 1
let changeNumber = ():number =>{
	if(num < imageSrcName.length){
		firstSectionImage.setAttribute('src', `./images/${imageSrcName[num]}`);
		return num++;
	};
	firstSectionImage.setAttribute('src', `./images/${imageSrcName[0]}`);
	return num = 1;
};

// setInterval(() => changeNumber(), 250);

let showElement = (theElement:HTMLElement, theClassNameOrCssVariableName:string, value:Number = 130, variableChangedValue = 'none') : void =>{
	let calculations:number = windowHeight - theElement.getBoundingClientRect().top;

	switch(variableChangedValue){
		case 'none' :
			calculations > value ? theElement.classList.add(theClassNameOrCssVariableName) : 
			calculations < 0 ? theElement.classList.remove(theClassNameOrCssVariableName):
			'';
		break;
		default:
			calculations > value ? theElement.style.setProperty(theClassNameOrCssVariableName,  variableChangedValue): 
			theElement.style.setProperty(theClassNameOrCssVariableName,  'none');
		break;
	}
}

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

const useRegex = (input: string) => {
    let regex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    regex.test(input) ? emailSubmitBtn.className = 'canSubmit' : emailSubmitBtn.classList.remove('canSubmit');
}

useRegex(emailField.value);
emailField.onkeyup = () => useRegex(emailField.value);

//@ts-ignore
neverMind.onclick = () => document.documentElement.onclick();

nugsLogoThirdSection.onclick = () =>{
	document.documentElement.classList.add('pointer-events-none');
	document.documentElement.classList.add('overflow-y-hidden');
	nugsSection.style.setProperty('--nugs-section-height',  (`-0px`));
	nugsSection.style.setProperty('--testing',  (`0px`));
	nugsSection.className = 'animation';
}

document.documentElement.onclick = e =>{
	//@ts-ignore using it because it say 'Property 'path' does not exist on type 'MouseEvent'' but it is
	if(e.path.includes(nugsLogoThirdSection)) return; //If we are clicking on the nugs logo, don't do anything
	nugsSection.classList.contains('animation') ?
	(
		document.documentElement.classList.remove('pointer-events-none'),
		document.documentElement.classList.remove('overflow-y-hidden'),
		nugsSection.style.setProperty('--nugs-section-height',  (`-${getComputedStyle(nugsSection).getPropertyValue('height')}`)),
		nugsSection.style.setProperty('--testing',  (`24px`)),
		setTimeout(() => nugsSection.classList.remove('animation'), 200)
	) : '';
}
nugsSection.style.setProperty('--nugs-section-height',  (`-${getComputedStyle(nugsSection).getPropertyValue('height')}`))