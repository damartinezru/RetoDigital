const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('Location', {
  // Model attributes are defined here
    name: {
    type: DataTypes.STRING,
    allowNull: false
  },
    area_m2: {
    type: DataTypes.DECIMAL
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true