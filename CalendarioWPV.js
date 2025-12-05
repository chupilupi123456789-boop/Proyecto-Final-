function mostrarPartidos(rama) {
    const todosPartidos = document.querySelectorAll('.Partidos');

    todosPartidos.forEach(div => {
        if(div.classList.contains(rama)) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
    document.getElementById('btnMasculino').classList.toggle('active', rama === 'masculino');
    document.getElementById('btnFemenino').classList.toggle('active', rama === 'femenino');
}
