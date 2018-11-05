const uuid = require('uuid/v1')
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
        notEmpty: true
      },
      site: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.TEXT,
      },
      phone: {
        type: Sequelize.TEXT
      },
      street: {
        type: Sequelize.TEXT,
        allowNull: false,
        notEmpty: true
      },
      city: {
        type: Sequelize.TEXT,
        allowNull: false,
        notEmpty: true
      },
      state: {
        type: Sequelize.TEXT,
        allowNull: false,
        notEmpty: true
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: false,
        notEmpty: true
      },
      lng: {
        type: Sequelize.FLOAT,
        allowNull: false,
        notEmpty: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      geom: {
        type: Sequelize.GEOMETRY
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants');
  }
};