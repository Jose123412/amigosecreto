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

//mostrar la lista de amigos en html
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// sortear el amigo secreto y mostrar el resultado
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para hacer el sorteo.');
        return;
    }

    // crear un arreglo
    let asignaciones = {};

    // copiar el array original
    let amigosRestantes = [...amigos];

    //para cada amigo, asignar un amigo secreto diferente
    for (let i = 0; i < amigos.length; i++) {
        let posibles = amigosRestantes.filter(nombre => nombre !== amigos[i]);
        if (posibles.length === 0) {
            // reiniciar sorteo para evitar que alguien quede sin asignación solo en casos especialse
            return sortearAmigo();
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];

        asignaciones[amigos[i]] = elegido;

        //quitar elegidos
        amigosRestantes = amigosRestantes.filter(nombre => nombre !== elegido);
    }

    // mostrar resultados
    mostrarResultados(asignaciones);
}

// mostrar el resultado del sorteo en pantalla html
function mostrarResultados(asignaciones) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${asignado}`;
        resultado.appendChild(li);
    }
}
