'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: { 
        min: {
          args: [0],
          msg: 'El valor de Rating es de 0-4, ingresa un valor mayor'},
        max: {
          args: 4,
          msg: 'El valor de Rating es de 0-4, ingresa un valor menor'}
      }
    },
    name: {
      type:DataTypes.TEXT,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          args: true, 
          msg: 'Se requiere un nombre del restaurant'}
      }
    },
    site: {
      type:DataTypes.TEXT,
      validate: {
        isUrl: {
          args:true,
          msg: 'La dirección web que ingresaste no es válida.'
        }
      }
    },
    email: {
      type:DataTypes.TEXT,
      validate: {
        isEmail: {
          args:true,
          msg: 'El correo electrónico no es válido'
        }
      }
    },
    phone: DataTypes.TEXT,
    street: {
      type:DataTypes.TEXT,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          args: true, 
          msg: 'Se requiere una calle del restaurant'}
      }
    },
    city: {
      type:DataTypes.TEXT,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          args: true, 
          msg: 'Se requiere una ciudad del restaurant'}
      }
    },
    state: {
      type:DataTypes.TEXT,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          args: true, 
          msg: 'Se requiere un estado (ubicación) del restaurant'}
      }
    },
    lat: {
      type:DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          args: true, 
          msg: 'Se requiere la latitud del restaurant'}
      }
    },
    lng: {
      type:DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          args: true, 
          msg: 'Se requiere la longitud del restaurant'}
      }
    }
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
  };
  return Restaurant;
};