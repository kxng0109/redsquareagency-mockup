const firstSectionImage = document.querySelector('#first-section--image') as HTMLImageElement;
const firstSectionParagraph = document.querySelector('#first-section--first-p') as HTMLParagraphElement;
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

setInterval(() => changeNumber(), 250);

let showElement = (elementHeight: number)  =>{
	return windowHeight - elementHeight > 130 ? 'show' : 'hide';
}

window.onscroll = () => console.log(showElement(firstSectionParagraph.getBoundingClientRect().top))
