const acertijos = [
    {
        pregunta: "¿Qué es negro de día, rojo de noche y siempre vigila?",
        respuesta: "batman"
    },
    {
        pregunta: "Mientras más le quitas, más grande se vuelve. ¿Qué es?",
        respuesta: "un hoyo"
    },
    {
        pregunta: "Tiene ojos pero no ve, tiene agua pero no bebe. ¿Qué es?",
        respuesta: "una aguja"
    },
    {
        pregunta: "Vuelo sin alas, lloro sin ojos. ¿Qué soy?",
        respuesta: "la nube"
    },
    {
        pregunta: "Cuanto más corres, más atrás se queda. ¿Qué es?",
        respuesta: "tu sombra"
    },
    {
        pregunta: "Siempre estoy en medio del cielo y nunca me muevo. ¿Qué soy?",
        respuesta: "la letra e"
    },
    {
        pregunta: "Tiene ciudades, pero no casas; ríos, pero no agua. ¿Qué es?",
        respuesta: "un mapa"
    },
    {
        pregunta: "Me rompo cuando me nombran. ¿Qué soy?",
        respuesta: "el silencio"
    },
    {
        pregunta: "Sube y baja, pero nunca se mueve. ¿Qué es?",
        respuesta: "las escaleras"
    },
    {
        pregunta: "Tiene llaves, pero no abre puertas. ¿Qué es?",
        respuesta: "un piano"
    }
];

let acertijoActual;

// Seleccionar un acertijo al azar cuando carga la página
window.onload = function () {
    const indice = Math.floor(Math.random() * acertijos.length);
    acertijoActual = acertijos[indice];
    document.getElementById("pregunta").textContent = acertijoActual.pregunta;
};

function verificar() {
    const respuestaUsuario = document.getElementById("respuesta").value
        .toLowerCase()
        .trim();

    const resultado = document.getElementById("resultado");

    if (respuestaUsuario === acertijoActual.respuesta) {
        resultado.textContent = "🟢 Correcto… has vencido al Acertijo.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Incorrecto. Inténtalo de nuevo 😈";
        resultado.style.color = "red";
    }
}
