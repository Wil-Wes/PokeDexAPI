// POKEDEX PROJECT

const pokeContainer = document.querySelector('#container');

// Using the first 151 Pokemon (AKA ID/Object) in the PokeAPI

const numofPokemon = 151;

// The createPokeCard function creates a new card (AKA section element) and adds the new card to the webpage/document inside of the div with the ID of container
// NOTE the value that will be passed in for the pokemon parameter will be the response received from an AXIOS request to the PokeAPI

function createPokeCard(pokemon) {
    const pokeCard = document.createElement('section');
    pokeCard.classList.add('pokemon')
    pokeContainer.append(pokeCard)
    // Setting the innerHTML for the new card using the data/object that is passedi nto the "pokemon" parameter. Also, using toUpperCase to display name in UPPERCASE
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}
    </h3>
    `;
}

async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData.data);
    console.log(pokemonData.data.sprites.front_default);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData)

}

// getPokemonData(1);

// The getPokemon function loops through all the pokemon IDs from 1 to 151 and runs/executes the getPokemonData function for each ID
// Note: Using async/await on this function because the code in the getPokemonData function is asynchronous (There is an axios in the function)

async function getPokemon(){
    for(i = 1; i<=numofPokemon; i++){
        console.log(i);
        await getPokemonData(i)
    }
}
// Running/Executing the getPokemon function which runs/executes the getPokemonData function each time through the loop
getPokemon();