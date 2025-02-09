'use strict';
const section = document.querySelector('.section');
const title = document.querySelector('.section__title');
const link = document.querySelector('.section__link');
const linkImg = document.querySelector('.section__link-img');

link.addEventListener('click', e => {
  e.preventDefault();

  if (!document.getElementById('overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    section.appendChild(overlay);
  }

  const imageURL = link.getAttribute('href');
  const newImage = document.createElement('img');

  newImage.src = imageURL;
  newImage.id = 'newImage';
  newImage.alt = 'Simple LightBox';

  document.getElementById('overlay').innerHTML = newImage.outerHTML;
});

document.addEventListener('click', function (e) {
  removeOverlay(e.target.id === 'overlay');
});

document.addEventListener('keyup', function (e) {
  removeOverlay(e.key === 'Escape');
});

function removeOverlay(myEvent) {
  const overlay = document.getElementById('overlay');

  if (myEvent) overlay.remove();
}
