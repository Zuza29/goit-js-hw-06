const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let listOfImages = document.querySelector('.gallery');
console.log(listOfImages);

if (listOfImages && listOfImages.classList) {
  listOfImages.classList.add('container');
}

images.forEach((imageItem) => {
  const listItem = document.createElement("li");
  const image = document.createElement("img");
  image.src = imageItem.url;
  image.alt = imageItem.alt;
  listItem.appendChild(image);
  listOfImages.insertAdjacentHTML('beforeend', `<li style="padding: 50px; list-style-type: none; display: inline;" ><img height="200" width="300" src="${imageItem.url}" alt="${imageItem.alt} "style="border: solid blue 5px"/></li>`)

})


