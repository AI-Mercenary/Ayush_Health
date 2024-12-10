const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const Scheme = require('./Scheme')
const User=require('./User')


const PropSubmission = sequelize.define('PropSubmission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: User, 
            key: 'id',   
        },
    },
    schemeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: Scheme, 
            key: 'id',   
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    submitDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    remarks:{
        type:DataTypes.STRING,
    }
}, {
    tableName: 'submissions',
    timestamps: true,
});

module.exports = PropSubmission;
