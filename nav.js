const menuToggle = document.querySelector('.ham-menu');
const siteNavigation = document.querySelector('.sidebar-container');
const closeButton = document.querySelector('.close-button');

/* Side Menu (Hamburger Button) */
menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === "false";

    if(open ? openMenu() : closeMenu());
});

closeButton.addEventListener('click', () => {
    const close = closeButton.getAttribute('aria-expanded') === "true";
  
    if(close ? closeMenu() : openMenu());
});

function openMenu() {
  menuToggle.setAttribute('aria-expanded', "true");
  siteNavigation.setAttribute('data-state', "opened");
}
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', "false");
  siteNavigation.setAttribute('data-state', "closing");

  siteNavigation.addEventListener('animationend', () => {
    siteNavigation.setAttribute('data-state', "closed");
  }, {once: true})
}

