// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const elMarkup = createPhotoCardsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', elMarkup);

function createPhotoCardsMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>`;
    })
    .join('');
}

galleryEl.addEventListener('click', noCroosToAnotherPage);

function noCroosToAnotherPage(evt) {
  evt.preventDefault();
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});
