import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
  </a>

  <div class="info">
    <p class="info-item">
      <span class="info-label">Likes</span>
      <span class="info-value">${likes}</span>
    </p>
    <p class="info-item">
      <span class="info-label">Views</span>
      <span class="info-value">${views}</span>
    </p>
    <p class="info-item">
      <span class="info-label">Comments</span>
      <span class="info-value">${comments}</span>
    </p>
    <p class="info-item">
      <span class="info-label">Downloads</span>
      <span class="info-value">${downloads}</span>
    </p>
  </div>
</li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}
