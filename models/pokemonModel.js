const pokemons = [
    { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
    { id: 2, nome: 'Squirtle', tipo: 'Água' },
    { id: 3, nome: 'Charmander', tipo: 'Fogo' },
    { id: 4, nome: 'Pikachu', tipo: 'Elétrico' },
    { id: 5, nome: 'Jigglypuff', tipo: 'Normal/Fada' },
    { id: 6, nome: 'Meowth', tipo: 'Normal' },
    { id: 7, nome: 'Psyduck', tipo: 'Água' },
    { id: 8, nome: 'Machop', tipo: 'Lutador' },
    { id: 9, nome: 'Geodude', tipo: 'Pedra/Terra' },
    { id: 10, nome: 'Abra', tipo: 'Psíquico' },
    { id: 11, nome: 'Oddish', tipo: 'Vegetal/Veneno' },
    { id: 12, nome: 'Growlithe', tipo: 'Fogo' },
    { id: 13, nome: 'Poliwag', tipo: 'Água' },
    { id: 14, nome: 'Magnemite', tipo: 'Elétrico/Metal' },
    { id: 15, nome: 'Doduo', tipo: 'Normal/Voador' },
    { id: 16, nome: 'Seel', tipo: 'Água' },
    { id: 17, nome: 'Grimer', tipo: 'Veneno' },
    { id: 18, nome: 'Shellder', tipo: 'Água' },
    { id: 19, nome: 'Gastly', tipo: 'Fantasma/Veneno' },
    { id: 20, nome: 'Krabby', tipo: 'Água' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo) => {const newPokemon = { id: pokemons.length + 1, nome, tipo,}; pokemons.push(newPokemon);
};


module.exports = { getPokemons, getPokemonById, createPokemon };