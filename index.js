// TAREA 7 Joshua Espinoza
/* 
Consumir el siguiente endpoint https://rickandmortyapi.com/api/character y realizar
1. Crear cards con la información de Nombre, Especie e Imagen
2. Debe utilizar el paradigma de orientación a objetos
3. Debe realizar una clase con la información necesaria (nombre, especie e
imagen) y protegerlo con getters.
4. Debe realizar un método llamado .show() que debe inyectar en el DOM las cards
con la data necesaria.
5. Debe inyectar al menos 20 personajes
Opcional: usar bootstrap u otro framework de CSS para darle estilos
 */

class Personaje {
  constructor(nombre, especie, imagen) {
    this._nombre = () => nombre;
    this._especie = () => especie;
    this._imagen = () => imagen;
  }

  get nombre() {
    return this._nombre();
  }
  get especie() {
    return this._especie();
  }
  get imagen() {
    return this._imagen();
  }

  show() {
    cardsContainer.innerHTML += `
      <div class="card my-2" style="width: 18rem; height: 24rem">
        <img src="${this.imagen}" class="card-img-top" 
        style="height: 16rem" alt="${this.nombre}" />
        <div class="card-body">
          <h5 class="card-title text-center">${this.nombre?.toUpperCase()}</h5>
          <h6 class="card-title text-center">${this.especie}</h6>
        </div>
      </div>`;
  }
}

const cardsContainer = document.getElementById("cardsContainer");

const getDataRickAndMorty = (async () => {
  const URL_BASE = "https://rickandmortyapi.com/api/character/";
  try {
    const request = await axios(URL_BASE);
    const data = await request.data;
    instaciacion(data);
  } catch (error) {
    console.error(error);
  }
})();

const instaciacion = (data) => {
  data.results.map((personajes) => {
    const personaje = new Personaje(
      personajes.name,
      personajes.species,
      personajes.image
    );
    personaje.show();
  });
};
