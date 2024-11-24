const trainerModel = require('../models/trainerModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    res.render('trainers', { trainers });
};

const addTrainer = (req, res) => {
    const { nome, pokemons } = req.body;

    const pokedexTrainer = [];

    pokemons.forEach((pokemonId) => {
        const pokemon = pokemonModel.getPokemonById(parseInt(pokemonId));
        if (pokemon) {
            pokedexTrainer.push(pokemon);
        }
    });

    trainerModel.createTrainer(nome, pokedexTrainer);
    res.redirect('/trainers');
};

const getAddTrainer = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('add-trainer', { pokemons });
};

const getTrainer = (req, res) => {
    const trainer = trainerModel.getTrainerById(req.params.id);
    if (trainer) {
        res.render('trainer', { trainer });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = { getAllTrainers, addTrainer, getAddTrainer, getTrainer };