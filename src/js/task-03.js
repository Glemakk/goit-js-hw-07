const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesContainerRef = document.querySelector('#gallery');
imagesContainerRef.classList.add('gallery__list')

const references = images.map(img => {
    const imgItemRef = document.createElement('li');
    imgItemRef.classList.add('gallery__list-item');
    imgItemRef.insertAdjacentHTML("beforeend", `<img src=${img.url} alt=${img.alt} width = 400>`);

    return imgItemRef;
});

imagesContainerRef.append(...references);