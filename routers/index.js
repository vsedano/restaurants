import express from 'express'
import db from '../models'
import {
    newRestaurant, 
    getAllRestaurants, getRestaurantById, getRestaurantsByName,
    updateRestaurant, updateRating,
    deleteRestaurant
} from '../controllers/restaurants'

const router = express.Router()

router.post('/restaurant', newRestaurant) 
router.get('/restaurants', getAllRestaurants)
router.get('/restaurant/:id', getRestaurantById)
router.get('/restaurants/:name', getRestaurantsByName)
router.put('/restaurant/:id', updateRestaurant)
router.patch('/restaurant/:id', updateRating)
router.delete('/restaurant/:id', deleteRestaurant)

export default router;