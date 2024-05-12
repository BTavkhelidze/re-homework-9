const burgrMenuIcon = document.querySelector('.burger__menu-icon');
const burgerMenuContest = document.querySelector('.burger__menu ');

burgrMenuIcon.addEventListener('click', () => {
  if (burgerMenuContest.style.display != 'block') {
    burgerMenuContest.style.display = 'block';
  } else {
    burgerMenuContest.style.display = 'none';
  }
  return burgerMenuContest.style.display;
});
