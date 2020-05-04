import Pokemones from "./data/pokemon/pokemon.js";
import { allPokemon, orderPokemonAz, orderPokemonZa, searchPoke  } from "./data.js";
const card = document.getElementById("viewCardCreate");
const btnPokedex = document.getElementById("btnSecondPage");
let fnOptionBody = document.getElementById("fnOptionBody");
let firstPage = document.getElementById("intro");
let home = document.getElementById("home");
let lhome = document.getElementById("link-home");
let pokedex = document.getElementById("pokedex");
//Arreglo con todos los datos de Pokemones
const allData = allPokemon(Pokemones.pokemon);
const orderedDataAz = orderPokemonAz(allData);
const orderedDataZa = orderPokemonZa(allData);
//const orderedDataDesc = orderPokemonDescendant(allData);
//Funcionalidad del botón  y enlace que oculta la bienvenida y lleva a la Pokedex
btnPokedex.addEventListener("click", () =>{
  viewAllPokemon(allData);
  showSecondPage();
  firstPage.style.display = "none";
});
pokedex.addEventListener("click", () =>{
  viewAllPokemon(allData);
  showSecondPage();
  firstPage.style.display = "none";
});
//Funcionalidad enlace Inicio y Logo, para mostrar la bienvenida
function homePage() {
  window.location.reload();
};
home.addEventListener("click", homePage);
lhome.addEventListener("click", homePage);
//Funcionalidad para mostrar la segunda pantalla
function showSecondPage(){
  //Crear selects y darles atributos
  let selectOrder = document.createElement("select");
  let selectType = document.createElement("select");
  selectOrder.setAttribute("id", "ordenPoke");
  selectOrder.setAttribute("class", "orderPoke");
  selectOrder.setAttribute("name", "ordenPoke");
  selectType.setAttribute("id", "tipoPoke");
  selectType.setAttribute("class", "tipoPoke");
  selectType.setAttribute("name", "tipoPoke");
  //Crear options del select Orden y sus nodos de texto y darles atributos
  let optOrderAll = document.createElement("option");
  let optOrderAZ = document.createElement("option");
  let optOrderZA = document.createElement("option");
  let optOrderAsc = document.createElement("option");
  let optOrderDesc = document.createElement("option");
  let optOrderAllText = document.createTextNode("Ordenar");
  let optOrderAZText = document.createTextNode("A-Z");
  let optOrderZAText = document.createTextNode("Z-A");
  let optOrderAscText = document.createTextNode("1-151");
  let optOrderDescText = document.createTextNode("151-1");
  optOrderAll.setAttribute("id", "all");
  optOrderAll.setAttribute("value", "All");
  optOrderAZ.setAttribute("id", "az");
  optOrderAZ.setAttribute("value", "A-Z");
  optOrderZA.setAttribute("id", "za");
  optOrderZA.setAttribute("value", "Z-A");
  optOrderAsc.setAttribute("id", "ascendant");
  optOrderAsc.setAttribute("value", "1-151");
  optOrderDesc.setAttribute("id", "descendant");
  optOrderDesc.setAttribute("value", "151-1");
  //Añadir nodos de texto a elementos y elementos option a select
  optOrderAll.appendChild(optOrderAllText);
  optOrderAZ.appendChild(optOrderAZText);
  optOrderZA.appendChild(optOrderZAText);
  optOrderAsc.appendChild(optOrderAscText);
  optOrderDesc.appendChild(optOrderDescText);
  //Añadir options a select
  selectOrder.appendChild(optOrderAll);
  selectOrder.appendChild(optOrderAZ);
  selectOrder.appendChild(optOrderZA);
  selectOrder.appendChild(optOrderAsc);
  selectOrder.appendChild(optOrderDesc);
  /*slType = `
  <option value="allType">Por Tipos</option>
  <option value="Grass">Planta</option>
  <option value="Poison">Veneno</option>
  <option value="Normal">Normal</option>
  <option value="Fire">Fuego</option>
  <option value="Water">Agua</option>
  <option value="Ice">Hielo</option>
  <option value="Ground">Tierra</option>
  <option value="Rock">Roca</option>
  <option value="Bug">Bicho</option>
  <option value="Electric">Eléctrico</option>
  <option value="Fighting">Pelea</option>
  <option value="Flying">Volador</option>
  <option value="Psychic">Psíquico</option>
  <option value="Ghost">Fantasma</option>
  <option value="Dragon">Dragón</option>
  `;
  /*<select id="debility" class="debility" name="debility">
  <option value="debilidad">Por Debilidad</option>
  </select>
  `;*/
  fnOptionBody.appendChild(selectOrder);
  //fnOptionBody.appendChild(selectType);
}
//Muestra todos lo Pokemones en pantalla
function viewAllPokemon(dataSet) {
  let cardTemplate = "";
  for (let i = 0; i < dataSet.length; i++) {
    cardTemplate += `
    <div class="elementCard">
    <div id='pokemon${dataSet[i].id}' class="card${dataSet[i].type[0]}">
    <div class='itemsPoke'> 
    <h2>${dataSet[i].name}</h2>
    <h3>${dataSet[i].num}</h3>
    <img class="imgPokemon" src="https://pokeres.bastionbot.org/images/pokemon/${dataSet[i].id}.png"/>
    <h3>${dataSet[i].type[0]} </h3>
    </div>
    </div>
    </div>`;
  }
  card.innerHTML = cardTemplate;
}
//Funcionalidad input de búsqueda por nombre
const input = document.getElementById("textPoke");
input.addEventListener("keydown", function(e) {
  if(event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
    event.preventDefault();
    card.innerHTML = "";
    const name = input.value;
    const pokeName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let chosenPoke = searchPoke(allData,pokeName);
    let cardTemplate = "";
    for (let i = 0; i < chosenPoke.length; i++) {
      cardTemplate += `
      <div class="elementCard">
      <div id='pokemon${chosenPoke[i].id}' class="card${chosenPoke[i].type[0]}">
      <div class='itemsPoke'> 
      <h2>${chosenPoke[i].name}</h2>
      <h3>${chosenPoke[i].num}</h3>
      <img class="imgPokemon" src="https://pokeres.bastionbot.org/images/pokemon/${chosenPoke[i].id}.png"/>
      <h3>${chosenPoke[i].type[0]} </h3>
      </div>
      </div>
      </div>`;
    }
    card.innerHTML = cardTemplate;
  } 
});
//Ordenar pokemones A-Z / Z-A / Regresar a todos
const selectElement = document.querySelector(".orderPoke");
console.log(selectElement);
selectElement.addEventListener("change", (e) => {
  const resultado = `${e.target.value}`;
  if (resultado === "A-Z") {
    viewAllPokemon(orderedDataAz);
  }
  if (resultado === "Z-A") {
    viewAllPokemon(orderedDataZa);
    
  } else if (resultado === "All") {
    viewAllPokemon(allData);
  }
});