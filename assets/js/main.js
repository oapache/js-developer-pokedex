const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 151;
let offset = 0;

function converterPokemonTypesTotal(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`).join('');
}

function converterPokemonTotal(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail"> 
        <ol class="types">
          ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </li>
  `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(converterPokemonTotal).join('');
  }).catch((error) => {
    console.error("Erro ao carregar novos Pokemons:", error);
  });
}

// Carrega os Pokémon iniciais
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(converterPokemonTotal).join('');
}).catch((error) => {
  console.error("Erro ao carregar os Pokemons:", error);
});










