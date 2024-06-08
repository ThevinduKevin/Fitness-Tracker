const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')
const router = express.Router()

//get all workouts 
router.get('/', getWorkouts)

//get a sigle workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a single workout'})
})

//update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a single workout'})
})


module.exports = router