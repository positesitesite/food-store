const items = document.querySelector('#items');
const left = document.querySelector('#slider__left');
const right = document.querySelector('#slider__right');

right.addEventListener('click', (e) => {
  loop('right', e);
});

left.addEventListener('click', (e) => {
  loop('left', e);
});

function loop(direction, e) {
  e.preventDefault();

  if (direction === 'right') {
    items.appendChild(items.firstChild);
  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}


