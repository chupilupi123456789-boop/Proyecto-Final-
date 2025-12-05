function mostrarTabla(rama) {
    var tablaMasculino = document.getElementById('masculino');
    var tablaFemenino = document.getElementById('femenino');

    var btnMasculino = document.querySelector('button[onclick="mostrarTabla(\'masculino\')"]');
    var btnFemenino = document.querySelector('button[onclick="mostrarTabla(\'femenino\')"]');

    if(rama === 'masculino') {
        tablaMasculino.style.display = 'block';
        tablaFemenino.style.display = 'none';
        btnMasculino.classList.add('active');
        btnFemenino.classList.remove('active');
    } else {
        tablaMasculino.style.display = 'none';
        tablaFemenino.style.display = 'block';
        btnMasculino.classList.remove('active');
        btnFemenino.classList.add('active');
    }
}
