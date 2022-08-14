const container = document.querySelector('#container') as HTMLDivElement;
const firstSectionImage = document.querySelector('#first-section--image') as HTMLImageElement;
const firstSectionFirstP = document.querySelector('#first-section--first-p') as HTMLParagraphElement;
const firstSectionSecondP = document.querySelector('#first-section--second-p') as HTMLParagraphElement;
const secondSection = document.querySelector('#second-section') as HTMLDivElement;
const clientNames = document.querySelectorAll('.clients--name') as NodeListOf<HTMLParagraphElement>;
const secondSectionHeader = document.querySelector('#second-section--header') as HTMLParagraphElement;

const clientNamesArr:HTMLParagraphElement[] = [...clientNames];

let windowHeight = window.innerHeight;
window.onresize = () => windowHeight = window.innerHeight;

headerWork.onclick = () =>{
	//@ts-ignore
	window.location = 'work.html';
}

// thirdSectionEmailSide.onmousemove = e =>{
// 	let xValue = `${((e.offsetX / screen.width) * 360) /*-20*//*(e.offsetX / 12)*/}deg`;
// 	let yValue = `${((e.offsetY / windowHeight) * 360) /*-20*/ (e.offsetY / 12)}deg`;
// 	console.log(e.offsetX, e.offsetY,thirdSectionEmailSide.getBoundingClientRect());
// 	// thirdSectionEmailSide.style.transform = `rotateX(${xValue}) rotateY(${yValue})`;
// }

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

setInterval(() => changeNumber(), 250);

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