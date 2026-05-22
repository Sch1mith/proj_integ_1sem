
function toggleMenu() {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

// 3. Fecha o menu dropdown se o usuário clicar em qualquer lugar FORA dele e do botão
window.addEventListener('click', function(event) {
    const menuDropdown = document.querySelector('.dropdown-menu');
    const btn = document.querySelector('.menu-btn');

    if (menuDropdown && menuDropdown.classList.contains('show')) {
        if (!btn.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('show'); 
        }
    }
});