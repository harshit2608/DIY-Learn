const menuId = document.getElementById('menu');

menuId.addEventListener('click', () => {
  const menuItems = menu.children;

  for (let item of menuItems) {
    item.classList.toggle('active');
    item.classList.remove('no_animation');
  }
});
