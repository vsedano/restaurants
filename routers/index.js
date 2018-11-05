import express from 'express'
import db from '../models'
import {
    newRestaurant, 
    getAllRestaurants, getRestaurantById, getRestaurantsByName,
    updateRestaurant, updateRating,
    deleteRestaurant,
    getRestaurantsByStatistics
} from '../controllers/restaurants'

const router = express.Router()

/**
 * @swagger
 * /restaurant:
 *  post:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Realiza el registro de un restaurant nuevo
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: body
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  rating:
 *                      type: integer
 *                      description: Value between 0-4
 *                      required: false
 *                      example: 1
 *                  name:
 *                      type: string
 *                      required: true
 *                      example: Little Caesars
 *                  site:
 *                      type: string
 *                      required: false
 *                      example: http://wwww.littlecaesars.com.mx
 *                  email:
 *                      type: string
 *                      required: false
 *                      example: littlecaesars@gmail.com
 *                  phone:
 *                      type: string
 *                      required: false
 *                      example: 555-341-77-66
 *                  street:
 *                      type: string
 *                      required: true
 *                      example: Av. Hidalgo
 *                  city:
 *                      type: string
 *                      required: true
 *                      example: Coyoacán
 *                  state:
 *                      type: string
 *                      required: true
 *                      example: Ciudad de México
 *                  lat:
 *                      type: float
 *                      required: true
 *                      example: 19.35085208
 *                  lng:
 *                      type: float
 *                      required: true
 *                      example: -99.150154
 *      responses:
 *          201:
 *             description: Devuelve un objeto json con los datos del restaurant 
 *             schema:
 *             type: object
 *             properties:
 *                  rating: 
 *                      example: 1
 *                  name: 
 *                      example: Little Caesars
 *                  site: 
 *                      example: http://www.littlecaesars.com.mx
 *                  email: 
 *                      example: littlecaesars@gmail.com
 *                  phone: 
 *                      example: 555-341-77-66
 *                  street: 
 *                      example: Av. Hidalgo
 *                  city: 
 *                      example: Coyoacán
 *                  state: 
 *                      example: Ciudad de México
 *                  lat: 
 *                      example: 19.35085208
 *                  lng: 
 *                      example: -99.150154
 *          400:
 *             description: Error en validacion de datos
 *             schema:
 *             type: object
 *             properties:   
 *                 message: 
 *                     example: El correo electrónico no es válido
 */
router.post('/restaurant', newRestaurant)

/**
 * @swagger
 * /restaurants:
 *  get:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Obtiene un arreglo con la información de todos los restaurants
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *             description: Devuelve un arreglo con objetos json del restaurant 
 *             schema:
 *             type: array
 *             properties:
 *                  rating: 
 *                      example: 1
 *                  name: 
 *                      example: Little Caesars
 *                  site: 
 *                      example: http://www.littlecaesars.com.mx
 *                  email: 
 *                      example: littlecaesars@gmail.com
 *                  phone: 
 *                      example: 555-341-77-66
 *                  street: 
 *                      example: Av. Hidalgo
 *                  city: 
 *                      example: Coyoacán
 *                  state: 
 *                      example: Ciudad de México
 *                  lat: 
 *                      example: 19.35085208
 *                  lng: 
 *                      example: -99.150154
 *          404:
 *             description: No se encontró ningún restaurant
 */
router.get('/restaurants', getAllRestaurants)

/**
 * @swagger
 * /restaurant/:id:
 *  get:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Obtiene un json con la información del restautant del id proporcionado
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            in: headers
 *            required: true
 *      responses:
 *          201:
 *             description: Devuelve un objeto json del restaurant correspondiente al id
 *             schema:
 *             type: object
 *             properties:
 *                  rating: 
 *                      example: 1
 *                  name: 
 *                      example: Little Caesars
 *                  site: 
 *                      example: http://www.littlecaesars.com.mx
 *                  email: 
 *                      example: littlecaesars@gmail.com
 *                  phone: 
 *                      example: 555-341-77-66
 *                  street: 
 *                      example: Av. Hidalgo
 *                  city: 
 *                      example: Coyoacán
 *                  state: 
 *                      example: Ciudad de México
 *                  lat: 
 *                      example: 19.35085208
 *                  lng: 
 *                      example: -99.150154
 *          404:
 *             description: No se encontró ningún restaurant con el id ingresado
 */
router.get('/restaurant/:id', getRestaurantById)

/**
 * @swagger
 * /restaurants/:name:
 *  get:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Obtiene un json con la información del restautant del nombre de restaurant proporcionado
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: name
 *            in: headers
 *            required: true
 *      responses:
 *          201:
 *             description: Devuelve un arreglo de objetos json de los restaurants correspondientes al nombre
 *             schema:
 *             type: array
 *             properties:
 *                  rating: 
 *                      example: 1
 *                  name: 
 *                      example: Little Caesars
 *                  site: 
 *                      example: http://www.littlecaesars.com.mx
 *                  email: 
 *                      example: littlecaesars@gmail.com
 *                  phone: 
 *                      example: 555-341-77-66
 *                  street: 
 *                      example: Av. Hidalgo
 *                  city: 
 *                      example: Coyoacán
 *                  state: 
 *                      example: Ciudad de México
 *                  lat: 
 *                      example: 19.35085208
 *                  lng: 
 *                      example: -99.150154
 *          404:
 *             description: No se encontró ningún restaurant con el nombre ingresado
 */
router.get('/restaurants/:name', getRestaurantsByName)

/**
 * @swagger
 * /restaurant/:id:
 *  put:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Realiza la actualización de datos de un restaurant
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            in: headers
 *            required: true
 *          - name: body
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  rating:
 *                      type: integer
 *                      description: Value between 0-4
 *                      required: false
 *                      example: 1
 *                  name:
 *                      type: string
 *                      required: true
 *                      example: Little Caesars
 *                  site:
 *                      type: string
 *                      required: false
 *                      example: http://wwww.littlecaesars.com.mx
 *                  email:
 *                      type: string
 *                      required: false
 *                      example: littlecaesars@gmail.com
 *                  phone:
 *                      type: string
 *                      required: false
 *                      example: 555-341-77-66
 *                  street:
 *                      type: string
 *                      required: true
 *                      example: Av. Hidalgo
 *                  city:
 *                      type: string
 *                      required: true
 *                      example: Coyoacán
 *                  state:
 *                      type: string
 *                      required: true
 *                      example: Ciudad de México
 *                  lat:
 *                      type: float
 *                      required: true
 *                      example: 19.35085208
 *                  lng:
 *                      type: float
 *                      required: true
 *                      example: -99.150154
 *      responses:
 *          201:
 *             description: Devuelve un objeto json con los datos actualizados del restaurant 
 *             schema:
 *             type: object
 *             properties:
 *                  rating: 
 *                      example: 1
 *                  name: 
 *                      example: Little Caesars
 *                  site: 
 *                      example: http://www.littlecaesars.com.mx
 *                  email: 
 *                      example: littlecaesars@gmail.com
 *                  phone: 
 *                      example: 555-341-78-99
 *                  street: 
 *                      example: Av. Hidalgo
 *                  city: 
 *                      example: Coyoacán
 *                  state: 
 *                      example: Ciudad de México
 *                  lat: 
 *                      example: 19.35085208
 *                  lng: 
 *                      example: -99.150154
 *          400:
 *             description: Error en validacion de datos
 *             schema:
 *             type: object
 *             properties:   
 *                 message: 
 *                     example: El correo electrónico no es válido
 */
router.put('/restaurant/:id', updateRestaurant)

/**
 * @swagger
 * /restaurant/:id:
 *  patch:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Realiza la actualización unicamnete del rating de un restaurant
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            in: headers
 *            required: true
 *          - name: body
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  rating:
 *                      type: integer
 *                      description: Value between 0-4
 *                      required: false
 *                      example: 4
 *      responses:
 *          201:
 *             description: Devuelve un objeto json con los datos actualizados del restaurant 
 *             schema:
 *             type: object
 *             properties:
 *                  rating: 
 *                      example: 4
 *                  name: 
 *                      example: Little Caesars
 *                  site: 
 *                      example: http://www.littlecaesars.com.mx
 *                  email: 
 *                      example: littlecaesars@gmail.com
 *                  phone: 
 *                      example: 555-341-77-66
 *                  street: 
 *                      example: Av. Hidalgo
 *                  city: 
 *                      example: Coyoacán
 *                  state: 
 *                      example: Ciudad de México
 *                  lat: 
 *                      example: 19.35085208
 *                  lng: 
 *                      example: -99.150154
 *          400:
 *             description: Error en validacion de datos
 *             schema:
 *             type: object
 *             properties:   
 *                 message: 
 *                     example: El valor de rating debe ser de 0-4
 */
router.patch('/restaurant/:id', updateRating)

/**
 * @swagger
 * /restaurant/:id:
 *  delete:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Elimina el registro de un restaurant
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            in: headers
 *            required: true
 *      responses:
 *          201:
 *             description: El restaurant ha sido eliminado
 *          404:
 *             description: No se encontró ningún restaurant con el id ingresado
 */
router.delete('/restaurant/:id', deleteRestaurant)

/**
 * @swagger
 * /restaurants/statistics/:latitude&:longitude&:radius:
 *  get:
 *      tags: 
 *          - name: RESTAURANTS
 *      description: Obtiene los datos (Count, Avg y Std) de los restaurants de acuerdo a la longitud, latitud y radio proporcionados
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: latitude
 *            in: headers
 *            required: true
 *            example: 19.350852
 *          - name: longitud
 *            in: headers
 *            required: true
 *            example: -99.150154
 *          - name: radius
 *            in: headers
 *            required: true
 *            example: 2000
 *      responses:
 *          201:
 *             description: Devuelve Count, Avg y Std
 *             schema:
 *             type: array
 *             properties:
 *                  count: 
 *                      example: 2
 *                  AVG: 
 *                      example: 4.00001
 *                  STD: 
 *                      example: 0
 *          400:
 *             description: Error
 */
router.get('/restaurants/statistics/:latitude&:longitude&:radius', getRestaurantsByStatistics)

export default router;