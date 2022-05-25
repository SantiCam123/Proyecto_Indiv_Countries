const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true 

    },
    Difficulty: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5,
        }
    },
    Time: {
        type: DataTypes.INTEGER,
    },
    Season: {
        type: DataTypes.STRING,
        validate: {
            equals: ("Verano", "Otoño", "Invierno", "Primavera")
        }
    }


  });
};