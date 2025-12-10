const hamburgueza = document.getElementById('Hamburgueza');
const links = document.getElementById('Links');

hamburgueza.addEventListener('click', () => {
    links.classList.toggle('active');
});
