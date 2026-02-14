
// EJERCICIO 1

function esperar() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Mensaje callback timeout ejecutandose (3 segundos)");
        }, 3000);
    });
}

async function ejercicio1() {

    document.getElementById("text-id").innerHTML = "Iniciando programa...";
    console.log("Iniciando programa...");

    let mensaje = await esperar();

    document.getElementById("text-id").innerHTML = mensaje + "<br>Fin programa";
    console.log(mensaje);
    console.log("Fin programa");
}


// EJERCICIO 2

async function ejercicio2() {

    document.getElementById("text-id2").innerHTML = "Buscando películas de DreamWorks...";

    try {

        const respuesta = await fetch("https://ghibliapi.vercel.app/films");

        const datos = await respuesta.json();

        console.log(datos);

          let salida = `
            <table>
                <tr>
                    <th>Título</th>
                    <th>Director</th>
                    <th>Año</th>
                </tr>
        `;

        for (let i = 0; i < 5; i++) {

             salida += `
                <tr>
                    <td>${datos[i].title}</td>
                    <td>${datos[i].director}</td>
                    <td>${datos[i].release_date}</td>
                </tr>
            `;
        }

        document.getElementById("text-id2").innerHTML = salida;
    } catch (error) {

        console.error(error);
        document.getElementById("text-id2").innerHTML =
            "Error al conectar con la API.";
    }
}