// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya fue agregado.');
        input.value = '';
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarLista();
}

// Función para mostrar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto y mostrar el resultado
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para hacer el sorteo.');
        return;
    }

    // Crear un arreglo temporal para asignaciones
    let asignaciones = {};

    // Copiar el array original para manipular
    let amigosRestantes = [...amigos];

    // Para cada amigo, asignar un amigo secreto diferente
    for (let i = 0; i < amigos.length; i++) {
        let posibles = amigosRestantes.filter(nombre => nombre !== amigos[i]);
        if (posibles.length === 0) {
            // En caso extremo, reiniciar sorteo para evitar que alguien quede sin asignación
            return sortearAmigo();
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];

        asignaciones[amigos[i]] = elegido;

        // Quitar elegido de amigosRestantes para no asignarlo otra vez
        amigosRestantes = amigosRestantes.filter(nombre => nombre !== elegido);
    }

    // Mostrar resultados
    mostrarResultados(asignaciones);
}

// Función para mostrar el resultado del sorteo en pantalla
function mostrarResultados(asignaciones) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${asignado}`;
        resultado.appendChild(li);
    }
}
