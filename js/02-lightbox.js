import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems.map (item => {
    return `<div class="gallery"><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a></div>`
}
    ).join(""); 

    const galleryBox = document.querySelector('.gallery')
    galleryBox.innerHTML = items;

    // galleryBox.addEventListener('click', onGalleryListBox);
 
    // function onGalleryListBox (e) {
    // e.preventDefault();
    
    // }

    var lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250,
    });

    

