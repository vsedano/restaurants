import express from 'express'
import fs from 'fs'
import csv  from 'csvtojson'
import db from './models'
const Restaurant = db.Restaurant
const csvFile = './csv/restaurantes.csv'

csv().fromFile(csvFile).then(jsonObj => {
    Restaurant.bulkCreate(jsonObj).then(restaurants => {
      console.log(`${restaurants.length} Restaurants created`)
    }).catch(error => {
        console.log(`Error ${error}`)
    })
})