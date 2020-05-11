import Pokemones from "./data/pokemon/pokemon.js";
import {
  allPokemon,
  orderPokemonAz,
  orderPokemonZa,
  filterType,
  orderedDataDescendant,
  filterWeakness,
  searchPoke,
} from "./data.js";
document.getElementById("filterOption").style.display= "none";
document.getElementById("viewCard").style.display="none";
document.getElementById("search").style.display="none";
let capturar = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("filterOption").style.display = "";
  document.getElementById("viewCard").style.display = "";
  document.getElementById("search").style.display="";
  viewAllPokemon(allData);
};
document.getElementById("btnSecondPage").addEventListener("click", capturar);
const card = document.getElementById("viewCardCreate");
//Arreglo con todos los datos de Pokemones
const allData = allPokemon(Pokemones.pokemon);
const orderedDataAz = orderPokemonAz(allData);
const orderedDataZa = orderPokemonZa(allData);
const orderedPokeDescendant = orderedDataDescendant(allData);
//Muestra todos lo Pokemones en pantalla
function viewAllPokemon(dataSet) {
  let cardTemplate = ""; 
  for (let i = 0; i < dataSet.length; i++) {
    cardTemplate += `
    <div id="elementCard" class="elementCard">
    <div id='pokemon${dataSet[i].id}' class="card ${dataSet[i].type[0]}">
    <div id="itemsPoke" class='itemsPoke'> 
    <h2>${dataSet[i].name}</h2>
    <h3 id="numId">${dataSet[i].num}</h3>
    <img class="imgPokemon" src="https://pokeres.bastionbot.org/images/pokemon/${dataSet[i].id}.png"/>
    <h3>Tipo:</h3>
    <span>${dataSet[i].type.join(
      "</br>"
      )}</span>
      </br>
      <h3>Debilidad:</h3>
      <span>${dataSet[i].weaknesses.join("</br>")}</span>
      </div>
      </div>
      </div>`;
    }
    card.innerHTML = cardTemplate; 
    modal(dataSet);
  }
  //Ordenar pokemones A-Z / Z-A / 151-1/ Regresar a todos
  const selectElement = document.querySelector(".ordenPoke");
  selectElement.addEventListener("change", (e) => {
    const resultado = `${e.target.value}`;
    //console.log(resultado);
    if (resultado === "A-Z") {
      viewAllPokemon(orderedDataAz);
    }
    if (resultado === "Z-A") {
      viewAllPokemon(orderedDataZa);
    }
    if (resultado === "151-1") {
      viewAllPokemon(orderedPokeDescendant);
    } else if (resultado === "All") {
      viewAllPokemon(allData);
    }
  });
  //Filtrar Pokemones por Tipo
  const selectType = document.querySelector(".typePoke");
  selectType.addEventListener("change", () => {
    let typePoke = selectType.value;
    if (typePoke === "allType") {
      viewAllPokemon(allData);
    } else {
      let result = filterType(allData, typePoke);
      viewAllPokemon(result);
    }
  });
  //Filtrar Pokemones por Debilidad
  const selectWeakness = document.querySelector(".weakness");
  selectWeakness.addEventListener("change", () => {
    let weaknessPoke = selectWeakness.value;
    if (weaknessPoke === "Weakness") {
      viewAllPokemon(allData);
    }
    else if (weaknessPoke === "Normal") {
      alert("Los pokemones no tienen debilidad a tipo normal");
    } else {
      let result = filterWeakness(allData, weaknessPoke);
      viewAllPokemon(result);
    }
  });
  //Buscar Pokemon por nombre 
  const input = document.getElementById("search");
  input.addEventListener("keydown", function() {
    if(event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
      event.preventDefault();
      //card.innerHTML = "";
      const name = input.value;
      const pokeName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      let chosenPoke = searchPoke(allData,pokeName);
      //console.log(chosenPoke);
      viewAllPokemon(chosenPoke);    
    } 
  });
  function modal(e){
    let principalContent = document.getElementById("principalModal");
    let cardcont = document.getElementById ("cardContent");
    let itemsPoke = document.getElementsByClassName("elementCard");
    principalContent.style.display="none";
    for(let i= 0; i<itemsPoke.length; i++){
      let tarjeta = itemsPoke[i];
      tarjeta.addEventListener ('click', ()=>{   
        principalContent.style.display = ""; 
        console.log()
        cardcont.innerHTML += `
        <section class="tarjetaPrincipal">
        <div class="x">
        <span class="close">&times;</span>
        </div>
        <section class="izquierda">
        <div class="caracteristicaPrincipal">
        <h3>${e[i].num}</h3>
        <h2>${e[i].name}</h2>
        <img class="img-modal" src="https://pokeres.bastionbot.org/images/pokemon/${e[i].id}.png"> 
        <h3 class="tipo">Tipo:</h3>
        <p>${e[i].type.join("</br>")}</p>
        </div>
        </section>
        <div class="fondo">
        <div class="derecha">
        <h3>Altura:</h3>
        <p>${e[i].height}</p>
        <h3>Peso:</h3>
        <p>${e[i].weight}</p>
        </div>
        <div class="derecha">
        <h3>Tipo de Caramelos:</h3>
        <p> ${e[i].candy} </p>
        <h3>Cantidad de caramelos para evolucionar:</h3>
        <p>${e[i].candy_count} </p>
        </div>
        </div>
        <div class="fondo">
        <div class="debilidades">
        <h3>Debilidad:</h3>
        <p>${e[i].weaknesses.join(" - ")}</p>
        </div>
        </div>
        <div class="fondo">
        <p> Pre Evolución: ${e[i].prev_evolution ? e[i].prev_evolution[0].num : 'No tiene'}</p> 
        <p> Pre Evolución: ${e[i].prev_evolution ? e[i].prev_evolution[0].name : 'No tiene'}</p> 
        <p> Evolución: ${e[i].next_evolution ? e[i].next_evolution[0].num : 'No tiene'}</p> 
        <p> Evolución: ${e[i].next_evolution ? e[i].next_evolution[0].name : 'No tiene'}</p>
        </div>
        </section>`;
        let span = document.getElementsByClassName("close")[0]; 
        span.addEventListener('click', ()=>{
          principalContent.style.display = "none"; 
          cardcont.innerHTML="";  
        });
        window.onclick = function(event) { 
          if (event.target == principalContent) {
            principalContent.style.display = "none";
            cardcont.innerHTML="";
          }
        }
      });
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  /*Mostrar Mas Detalles de la Carta
  const pokeCard = document.querySelector(".viewCard");
  console.log(pokeCard);
  pokeCard.addEventListener("click", function(e) {
    const numId = document.getElementById("pokemon");
    //console.log(numId);
    const numPokemon = numId;
    //console.log(numPokemon);
    let chosenPoke = cardPoke(allData,numPokemon);
    //console.log(chosenPoke);
    viewAllPokemon(chosenPoke);
  });
  */
  
  
  /*
  document.querySelectorAll('.elementCard').forEach(function(el){
    el.addEventListener('click', function() {
      const numPokemon = this.id;
      let chosenPoke = cardPoke(allData,numPokemon);
      console.log(chosenPoke);
      //viewAllPokemon(chosenPoke);
    });
  });
  
  */
  
  /* let on= (dataSet)=>{
    document.getElementById("overlay").style.display = "block";
    const ovCard = document.getElementById("overlayCard");
    let cardTemplate = "";
    cardTemplate += `
    <section class="tarjetaPrincipal">
    <div class="contenedor">
    <section class="izquierda">
    <div class="caracteristicaPrincipal">
    <p>${dataSet[0].num}</p>
    <p>${dataSet[0].name}</p>
    <img src="${dataSet[0].img}">
    <p>Tipo: ${dataSet[0].type.join(" - ")}</p>
    </div>
    
    </section>
    
    <section class="derecha">
    <div class="caracteristicasSecundarias">
    <p>Altura: ${dataSet[0].height}</p>
    <p>Peso: ${dataSet[0].weight}</p>
    <p>Caramelos: ${dataSet[0].candy} </p>
    <p>Cantidad Caramelos:${dataSet[0].candy_count} </p>
    </div>
    <div class="debilidades">
    <p>Debilidad: ${dataSet[0].weaknesses.join(" - ")}</p>
    </div>
    </section>
    </div>
    <section class="fondo">
    <div class="subFondo">
    <img src="http://www.serebii.net/pokemongo/pokemon/002.png">
    <img src="http://www.serebii.net/pokemongo/pokemon/003.png">
    </div>
    
    </section>
    </section>`;
    
    ovCard.innerHTML = cardTemplate;
    console.log(ovCard);
  }
  document.getElementById("pokemon1").addEventListener("click", on(allData));
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  document.getElementById("overlay").addEventListener("click", off); */