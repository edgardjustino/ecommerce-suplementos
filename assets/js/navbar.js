const hamburguer = document.getElementById('navtoggle');
const navMenu = document.getElementById('navmenu');
//const toggleItems = document.querySelectorAll('.nav-toggle');

function toggle() {
  hamburguer.classList.toggle('active-toggle');
  navMenu.classList.toggle('active-toggle');
};

document.onclick = function (e) {
  if (e.target.id !== 'navmenu' && e.target.id !== 'navtoggle') {
    hamburguer.classList.remove('active-toggle');
    navMenu.classList.remove('active-toggle');
  }
};