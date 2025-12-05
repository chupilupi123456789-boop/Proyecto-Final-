const leerMasLinks = document.querySelectorAll('.noticia a');

const popup = document.createElement('div');
popup.classList.add('popup');
popup.style.display = 'none';

popup.innerHTML = `
  <div class="popup-content">
    <img src="" alt="Imagen Noticia" id="popup-img">
    <h3 id="popup-title"></h3>
    <p id="popup-text"></p>
    <button id="cerrar-popup">Cerrar</button>
  </div>
`;

document.body.appendChild(popup);

leerMasLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el link abra otra página

        const noticia = this.closest('.noticia'); // Obtenemos la noticia completa
        const imgSrc = noticia.querySelector('img').src;
        const titulo = noticia.querySelector('h3').innerText;
        const parrafo = noticia.querySelector('p').innerText;

        document.getElementById('popup-img').src = imgSrc;
        document.getElementById('popup-title').innerText = titulo;
        document.getElementById('popup-text').innerText = parrafo;

        popup.style.display = 'flex';
    });
});


document.getElementById('cerrar-popup').addEventListener('click', function() {
    popup.style.display = 'none';
});


popup.addEventListener('click', function(e) {
    if(e.target === popup) {
        popup.style.display = 'none';
    }
});
