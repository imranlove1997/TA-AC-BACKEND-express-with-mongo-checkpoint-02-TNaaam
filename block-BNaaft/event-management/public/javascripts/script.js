var button = document.querySelector('.filter-btn');
var filter = document.querySelector('.filter');
var filterAdd = document.querySelector('.filter-add');


var close = document.querySelector('.fa-close');

button.addEventListener('click', () => {

  filter.classList.remove('add');
  filter.classList.add('active');
  filterAdd.classList.remove('active');
  filterAdd.classList.add('add');
});

close.addEventListener('click', () => {
  filter.classList.add('add');
  filter.classList.remove('active');
  filterAdd.classList.add('active');
  filterAdd.classList.remove('add');
})