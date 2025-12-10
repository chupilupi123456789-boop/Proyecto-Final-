function togglePlayerInfo(playerCard) {
    const expandedInfo = playerCard.querySelector('.info-expandida');
    const boton = playerCard.querySelector('.btn-leer-mas');

    if (expandedInfo.style.display === 'none' || expandedInfo.style.display === '') {
        expandedInfo.style.display = 'block';
        boton.textContent = 'Leer menos';
        playerCard.classList.add('expandido');
    } else {
        expandedInfo.style.display = 'none';
        boton.textContent = 'Leer más';
        playerCard.classList.remove('expandido');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-leer-mas');
    botones.forEach(boton => {
        boton.addEventListener('click', e => {
            e.stopPropagation();
            const jugador = boton.closest('.Jugador');
            togglePlayerInfo(jugador);
        });
    });
});
