// Función para alternar información expandida
        function togglePlayerInfo(playerCard) {
            // Buscar la información expandida dentro de la tarjeta
            const expandedInfo = playerCard.querySelector('.info-expandida');
            const boton = playerCard.querySelector('.btn-leer-mas');

            if (expandedInfo.style.display === 'none' || expandedInfo.style.display === '') {
                // Mostrar información
                expandedInfo.style.display = 'block';
                boton.textContent = 'Leer menos';
                playerCard.classList.add('expandido');
            } else {
                // Ocultar información
                expandedInfo.style.display = 'none';
                boton.textContent = 'Leer más';
                playerCard.classList.remove('expandido');
            }
        }

        // Agregar evento a los botones cuando carga la página
        document.addEventListener('DOMContentLoaded', function () {
            const botones = document.querySelectorAll('.btn-leer-mas');

            botones.forEach(boton => {
                boton.addEventListener('click', function (e) {
                    e.stopPropagation();
                    // Buscar la tarjeta padre
                    const jugador = boton.closest('.Jugador');
                    togglePlayerInfo(jugador);
                });
            });
        });