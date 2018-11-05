import db from '../models'
import sequelize from 'sequelize'
const Restaurant = db.Restaurant

const getRestaurantByIdM = (idRestaurant) => {
    return new Promise((resolve, reject) => {
        Restaurant.find({
            where : {id: idRestaurant}
        }).then(restaurant => {
            if(restaurant != null)
            resolve(restaurant)
            reject({message: `No se encontró ningún restaurant con el id ingresado`})
        }).catch(error => {
            reject(error)
        })
    })
}

const getByStatisticsM = (lat, lng, r) => {
    return new Promise((resolve, reject) => {
        lat = parseFloat(lat)
        lng = parseFloat(lng)
        const distance = parseFloat(r)/100000
        Restaurant.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('id')), 'Count'],
                [sequelize.fn('AVG', sequelize.col('rating')), 'AVG'],
                [sequelize.fn('STDDEV', sequelize.col('rating')), 'STD'],
            ],
            where: sequelize.where(
                sequelize.fn(
                'ST_DWithin',
                    sequelize.literal('geom'),
                    sequelize.fn('ST_SetSRID', sequelize.fn('ST_MakePoint', lng, lat), 32619),
                distance), true
            )
        }).then(rest => {
            resolve(rest)
        }).catch(error => {
            reject(error)
        })
    })
}

export{
    getRestaurantByIdM,
    getByStatisticsM
}