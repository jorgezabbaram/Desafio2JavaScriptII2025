const colores = [
    "red", "blue", "green", "yellow", "purple",
    "orange", "pink", "cyan", "magenta", "lime",
    "teal", "indigo", "violet", "brown", "gray"
];

function obtenerColorAleatorio() {
    return colores[Math.floor(Math.random() * colores.length)];
}

function cambiarFondo(event) {
    const a = obtenerColorAleatorio();
    const b = obtenerColorAleatorio();
    const c = obtenerColorAleatorio();
    const d = obtenerColorAleatorio();
    const e = obtenerColorAleatorio();

    const gradiente = `linear-gradient(to right bottom, ${a}, ${b}, ${c}, ${d}, ${e})`;
    document.body.style.background = gradiente;
    event.stopPropagation();
}

//Eliminamos el siguiente listener
//document.body.addEventListener("click", cambiarFondo);
