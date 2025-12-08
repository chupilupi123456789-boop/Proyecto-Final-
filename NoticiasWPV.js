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

// Event listeners para "Leer más"
const leerMasLinks = document.querySelectorAll('.noticia a');

leerMasLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const noticia = this.closest('.noticia');
        const imgSrc = noticia.querySelector('img').src;
        const titulo = noticia.querySelector('h3').innerText;
        
        // Obtener el texto completo del HTML
        const textoCompletoElement = noticia.querySelector('.texto-completo');
        const textoCompleto = textoCompletoElement ? textoCompletoElement.innerText : "Lo sentimos, no hay información adicional disponible.";

        // Llenar el popup
        document.getElementById('popup-img').src = imgSrc;
        document.getElementById('popup-title').innerText = titulo;
        
        // Dividir en párrafos
        const parrafos = textoCompleto.trim().split('\n\n');
        const textoHTML = parrafos.map(p => `<p>${p.trim()}</p>`).join('');
        document.getElementById('popup-text').innerHTML = textoHTML;

        popup.style.display = 'flex';
    });
});

// Cerrar popup con el botón
document.getElementById('cerrar-popup').addEventListener('click', function() {
    popup.style.display = 'none';
});

// Cerrar popup al hacer clic fuera
popup.addEventListener('click', function(e) {
    if(e.target === popup) {
        popup.style.display = 'none';
    }
});