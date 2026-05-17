const menu = document.querySelector('.pages');

document.addEventListener('click', function(event) {
    if (menu.hasAttribute('open') && !menu.contains(event.target)) {
        menu.removeAttribute('open');
    }
});
