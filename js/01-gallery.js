import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems.map(item => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" >
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`}).join("");

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;

galleryBox.addEventListener('click', onLinkClick);

function onLinkClick(e) {
    e.preventDefault();
	const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`)
	instance.show();

  galleryBox.addEventListener('keydown', onGalleryBoxClose);

function onGalleryBoxClose (e) {
if (e.key === 'Escape') {
  galleryBox.removeEventListener('keydown', onGalleryBoxClose);
  instance.close(); 
}
}
}



