const headerTemplate = ``;

const footerTemplate = ``;

document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector('#comp-header');
    const footerElement = document.querySelector('#comp-footer');

    if (headerElement) headerElement.innerHTML = headerTemplate;
    if (footerElement) footerElement.innerHTML = footerTemplate;
});
