const contenedor = document.getElementById("contenedor")
async function cargarUsuarios() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        mostrarPokemon(data.results);
    } catch (error) {
        console.log(error);
    }
}

cargarUsuarios();


function mostrarPokemon(usuarios) {
    usuarios.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
        <h3>${element.name}</h3>
        `;

        contenedor.appendChild(div);
    });
}