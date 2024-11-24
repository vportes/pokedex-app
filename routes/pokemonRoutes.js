const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemonController')
const trainerController = require('../controllers/trainerController')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/pokedex', pokemonController.getAllPokemon)
router.get('/pokemon/:id', pokemonController.getPokemon)
router.get('/add-pokemon', pokemonController.getAddPokemon)
router.post('/add-pokemon', pokemonController.addPokemon)

router.get('/trainers', trainerController.getAllTrainers)
router.get('/trainers/:id', trainerController.getTrainer)
router.get('/add-trainer', trainerController.getAddTrainer)
router.post('/add-trainer', trainerController.addTrainer)


module.exports = router
