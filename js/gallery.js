// Buttons
let buttonForward = document.getElementById('forwardButton');
let buttonBackward = document.getElementById('backwardButton');
let buttonUp = document.getElementById('upButton');
let buttonReadMore = document.querySelector('.btn');

// Main Image
let mainImage = document.getElementById('main-img__img');
let imageCaption = document.querySelector('figcaption');

// Thumbnail Bar
let thumbnailItems = document.getElementsByClassName('thumbnail-bar__item');
let thumbnailBar = document.querySelector('.thumbnail-bar__items');

let imgData = [
	{
		'src' : 'images/flowers-pink-small.jpg',
		'title' : 'Market in Münster',
		'description' : 'Market in Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=62071586'
	},
	{
		'src' : 'images/flowers-purple-small.jpg',
		'title' : 'Sentmaring Park',
		'description' : 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48576226'
	},
	{
		'src' : 'images/flowers-red-small.jpg',
		'title' : 'Poppies in cornfield',
		'description' : 'Poppies in cornfield, Dülmen,  North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=40957238'
	},
	{
		'src' : 'images/flowers-white-small.jpg',
		'title' : 'Daffodils in Sentmaring park',
		'description' : 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48211466'
	},
	{
		'src' : 'images/flowers-yellow-small.jpg',
		'title' : 'Sunflowers in the hamlet Dernekamp',
		'description' : 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=61514522'
	}
];

// Display Items in Thumbnail bar
for(let i = 0; i < imgData.length; i++) {
	let newListItem = document.createElement('li');
	let newImg = document.createElement('img');
	newImg.setAttribute('src', imgData[i].src);
	newImg.setAttribute('url', imgData[i].url);
	newImg.setAttribute('alt', imgData[i].description);
	newImg.setAttribute('title', imgData[i].title);
	newImg.className = 'thumbnail-bar__item';
	newListItem.appendChild(newImg);
	thumbnailBar.appendChild(newListItem);
}

// Slide show
let slideIndex = 0;
slideshow(slideIndex);

function slideshow(x) {
  if (x >= imgData.length) { x = 0; slideIndex = 0}
  if (x < 0) { x = imgData.length - 1; slideIndex = imgData.length - 1}

  let target = imgData[x];
  mainImage.setAttribute('src', target.src.replace('small', 'large'));
  imageCaption.textContent = target.title;
  buttonReadMore.setAttribute('href', target.url);

  clickedItem(x);
}

function clickedItem(x) {
  if (x >= imgData.length) { x = 0; slideIndex = 0}
  if (x < 0) currentSlide = imgList.length - 1;

  for (let thumbnailItem of thumbnailItems) {
    thumbnailItem.setAttribute('id', '');
  }

  thumbnailItems[x].setAttribute('id', 'thumbnail-bar__item-clicked');
}

function slideOperator(x) {
  slideIndex += x;
  slideshow(slideIndex);
}

setInterval(function() {
	slideOperator(1)
}, 4000);

buttonForward.onclick = () => { slideOperator(1) };
buttonBackward.onclick = () => { slideOperator(-1) };

buttonUp.onclick = () => {
	for (let item of thumbnailItems) {
		item.classList.toggle('hide');
	}

	buttonUp.classList.toggle('no-transform');
}

for (let itemIndex in thumbnailItems) {
	thumbnailItems[itemIndex].onclick = () => {
		slideOperator(itemIndex-1)
	}
}