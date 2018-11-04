import db from '../models'
const Restaurant = db.Restaurant

const getRestaurantByIdM = (idRestaurant) => {
    return new Promise((resolve, reject) => {
        Restaurant.find({
            where : {id: idRestaurant}
        }).then(restaurant =>{
            if(restaurant!=null)
            resolve(restaurant)
            reject({message: `No se encontró ningún restaurant con el id ingresado`})
        }).catch(error => {
            reject(error)
        })
    })
}

export{
    getRestaurantByIdM
}