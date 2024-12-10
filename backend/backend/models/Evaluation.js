const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const PropSubmission=require('./PropSubmission')

const Evaluation = sequelize.define('Evaluation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    propId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: PropSubmission, 
            key: 'id',   
        },
    },
    monitoringDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    comments: {
        type: DataTypes.STRING,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    attachments:{
        type:DataTypes.STRING,
    }
}, {
    tableName: 'evaluation',
    timestamps: true,
});

module.exports = Evaluation;
