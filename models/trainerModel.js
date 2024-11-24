const { getPokemonById } = require('./pokemonModel');

const trainers = [
    { id: 1, nome: 'Ash', pokedex: [getPokemonById(4), getPokemonById(13)] }
];

const getTrainers = () => {
    console.log('Retornando treinadores:', trainers);
    return trainers;
};

const createTrainer = (nome, pokedex) => {
    const newTrainer = { id: trainers.length + 1, nome, pokedex };
    trainers.push(newTrainer);
    console.log('Treinador criado:', newTrainer);
};

const getTrainerById = (id) => trainers.find(trainer => trainer.id === parseInt(id));

module.exports = { getTrainers, createTrainer, getTrainerById };