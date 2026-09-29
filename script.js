// ============================
// MÚSICA
// ============================

const musica = document.getElementById("musica");
const musicaBtn = document.getElementById("musicaBtn");

let reproduciendo = false;

musicaBtn.addEventListener("click", function () {

    if (!reproduciendo) {

        musica.play()
            .then(function () {

                musicaBtn.innerHTML = "⏸️ Pausar música";
                reproduciendo = true;

            })
            .catch(function (error) {

                console.error("Error al reproducir la música:", error);

                alert("No se pudo reproducir la música. Revisa que el archivo esté dentro de la carpeta musica.");

            });

    } else {

        musica.pause();

        musicaBtn.innerHTML = "🎵 Encender música";

        reproduciendo = false;

    }

});

// ============================
// CARTA
// ============================

const cartaBtn = document.getElementById("cartaBtn");
const carta = document.getElementById("carta");

cartaBtn.addEventListener("click", function () {

    carta.classList.toggle("mostrar");

    if (carta.classList.contains("mostrar")) {

        cartaBtn.innerHTML = "💖 Cerrar carta";

    } else {

        cartaBtn.innerHTML = "💝 Abre mi amor";

    }

});

// ============================
// SORPRESA FINAL
// ============================

const sorpresaBtn = document.getElementById("sorpresaBtn");
const sorpresa = document.getElementById("sorpresa");

sorpresaBtn.addEventListener("click", function () {

    sorpresa.classList.toggle("mostrar");

    if (sorpresa.classList.contains("mostrar")) {

        sorpresaBtn.innerHTML = "❤️ Mi sorpresa";

    } else {

        sorpresaBtn.innerHTML = "🏁 Ver sorpresa";

    }

});