// Obtener la fecha actual
const today = new Date();
const year = today.getFullYear();

// Actualizar el año en el footer
const footerYear = document.querySelector('.footer__year');
footerYear.textContent = year;
