function mostrarPartidos(rama) {
    const todosPartidos = document.querySelectorAll('.Partidos');

    todosPartidos.forEach(div => {
        div.style.display = div.classList.contains(rama) ? 'block' : 'none';
    });

    document.getElementById('btnMasculino').classList.toggle('active', rama === 'masculino');
    document.getElementById('btnFemenino').classList.toggle('active', rama === 'femenino');
}

// Inicializar mostrando Masculino por defecto
document.addEventListener('DOMContentLoaded', function() {
    mostrarPartidos('masculino');
});
