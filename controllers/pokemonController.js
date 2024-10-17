const pokemonModel = require('..models/pokemonModel');
const getAllPokemons = (req, res) => {
  const pokemons = pokemonModel.getAllPokemons();
  res.render('index', { pokemons });
};

const getPokemons = (req, res) => {
  const pokemon = pokemonModel.getPokemonbyId(req.params.id);
  if (pokemon) {
    res.render('pokemon', { pokemon});
  } else { 
    res.status(404).send('Pokémon não encontrado');
  }
}