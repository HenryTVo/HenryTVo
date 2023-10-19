document.addEventListener('DOMContentLoaded', function() {
  let typed = new Typed(".auto-type", {
    strings: ["Student", "Him"],
    typespeed: 150,
    typespeed: 150,
  });

});

document.addEventListener('DOMConrentLoaded', function()) {
 const menuIcon = document.getElementById('menu-icon');
 const navMenu = document.getElementById('nav=menu');
}
function toggleNavMenu() {
if (window.innerWidth > 789) {
  if (navMenu.style.display === 'block' || navMenu.style.display === '') {
    navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'block';
    }
  } else {
    navMenu.style.display = 'block';
  }
}


menuIcon.addEventListener('click', function() {
  toggleNavMenu();
});


toggleNavMenu();
window.addEventListener('resize', toggleNavMenu);