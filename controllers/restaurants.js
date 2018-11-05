import {getRestaurantByIdM, getByStatisticsM} from '../managers/restaurants'
import db from '../models'
const Restaurant = db.Restaurant

const newRestaurant = (req, res) => {
    Restaurant.create(req.body).then(restaurant => {
        res.status(201).json(restaurant)
    }).catch(error => {
        res.status(400).json(error.message)
    })
}

const getAllRestaurants = (req, res) => {
    Restaurant.findAll().then(restaurants =>{
        res.status(200).json(restaurants)
    }).catch(error => {
        res.status(404).json(error.message)
    })
}

const getRestaurantById = (req, res) => {
    getRestaurantByIdM(req.params.id).then(restaurant =>{
        res.status(200).json(restaurant)
    }).catch(error => {
        res.status(404).json(error.message)
    })
}

const getRestaurantsByName = (req, res) => {
    Restaurant.findAll({
        where : {name: req.params.name}
    }).then(restaurants =>{
        if(restaurants>0)
        res.status(200).json(restaurants)
        res.status(404).json(`No se encontró ningún restaurant con el nombre ingresado`)
    }).catch(error => {
        res.status(404).json(error.message)
    })
}

const updateRestaurant = (req, res) => {
    Restaurant.update({
        rating: req.body.rating,
        name: req.body.name,
        site: req.body.site,
        email: req.body.email,
        phone: req.body.phone,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        lat: req.body.lat,
        lng: req.body.lng
    },{
        where: {id: req.params.id}
    }).then(flag =>{
        getRestaurantByIdM(req.params.id).then(restaurant =>{
            res.status(200).json(restaurant)
        }).catch(error => {
            res.status(404).json(error.message)
        })
    }).catch(error => {
        res.status(400).json(error.message)
    })
}

const updateRating = (req, res) => {
    Restaurant.update({
        rating: req.body.rating
    },{
        where: {id: req.params.id}
    }).then(flag =>{
        getRestaurantByIdM(req.params.id).then(restaurant =>{
            res.status(200).json(restaurant)
        }).catch(error => {
            res.status(404).json(error.message)
        })
    }).catch(error => {
        res.status(400).json(error.message)
    })
}

const deleteRestaurant = (req, res) => {
    Restaurant.destroy({
        where: {id: req.params.id}
    }).then(flag => {
        if(flag>0)
        res.status(202).json(`El restaurant ha sido eliminado`)
        res.status(404).json(`No se encontró ningún restaurant con el id ingresado`) 
    }).catch(error => {
        res.status(400).json(error.message) 
    })
}

const getRestaurantsByStatistics = (req, res) => {
    console.log(req.params)
    getByStatisticsM(req.params.latitude, req.params.longitude, req.params.radius).then(r => {
        res.status(200).json(r)
    }).catch(error => {
        res.status(400).json(error)
    })
}

export {
    newRestaurant,
    getAllRestaurants,
    getRestaurantById,
    getRestaurantsByName,
    updateRestaurant,
    updateRating,
    deleteRestaurant,
    getRestaurantsByStatistics
}