const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

// Define the User model
const Scheme = sequelize.define('Scheme', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    objective: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fund: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fundType:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    startDate:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    endDate:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    }
}, {
    tableName: 'scheme',
    timestamps: true,
});

module.exports = Scheme;
