//contador
const fechaEvento = new Date("August 22, 2026 00:00:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";

        document.querySelector("#contador h2").innerHTML =
            "🎉 ¡Hoy es el gran día!";

        clearInterval(intervalo);

        return;
    }

    const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horasRestantes = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutosRestantes = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundosRestantes = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );

    dias.textContent = String(diasRestantes).padStart(2, "0");
    horas.textContent = String(horasRestantes).padStart(2, "0");
    minutos.textContent = String(minutosRestantes).padStart(2, "0");
    segundos.textContent = String(segundosRestantes).padStart(2, "0");

}

actualizarContador();

const intervalo = setInterval(actualizarContador, 1000);

//musica
const musica = document.getElementById("musica");
const btnMusic = document.getElementById("btnMusic");
const btnDescubrir = document.getElementById("btnDescubrir");

let reproduciendo = false;

btnDescubrir.addEventListener("click", () => {

    if (!reproduciendo) {

        musica.play();

        reproduciendo = true;

        btnMusic.style.display = "block";

        btnMusic.classList.add("girando");

    }

});

btnMusic.addEventListener("click", () => {

    if (reproduciendo) {

        musica.pause();

        btnMusic.classList.remove("girando");

    } else {

        musica.play();

        btnMusic.classList.add("girando");

    }

    reproduciendo = !reproduciendo;

});