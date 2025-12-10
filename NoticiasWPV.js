// Crear el popup
const popup = document.createElement('div');
popup.classList.add('popup');
popup.style.display = 'none';

popup.innerHTML = `
  <div class="popup-content">
    <img src="" alt="Imagen Noticia" id="popup-img">
    <h3 id="popup-title"></h3>
    <div id="popup-text"></div>
    <button id="cerrar-popup">Cerrar</button>
  </div>
`;

document.body.appendChild(popup);

// Seleccionar solo los botones "Leer más"
const leerMasLinks = document.querySelectorAll('.leer-mas');

leerMasLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const noticia = this.closest('.noticia');
        if (!noticia) return;

        const imgSrc = noticia.querySelector('img')?.src || '';
        const titulo = noticia.querySelector('h3')?.innerText || 'Sin título';
        const textoCompletoElement = noticia.querySelector('.texto-completo');
        const textoCompleto = textoCompletoElement ? textoCompletoElement.innerHTML : "<p>No hay información adicional disponible.</p>";

        // Llenar el popup
        document.getElementById('popup-img').src = imgSrc;
        document.getElementById('popup-title').innerText = titulo;
        document.getElementById('popup-text').innerHTML = textoCompleto;

        popup.style.display = 'flex';
    });
});

// Cerrar popup con el botón
document.getElementById('cerrar-popup').addEventListener('click', function() {
    popup.style.display = 'none';
});

// Cerrar popup al hacer clic fuera del contenido
popup.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
