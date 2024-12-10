const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const PropSubmission=require('./PropSubmission')


const Document = sequelize.define('Document', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    propId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:PropSubmission,
          key:'id',
        }
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fileType:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    uploadDate:{
        type:DataTypes.DATE,
        allowNull:false,
    },
}, {
    tableName: 'document',
    timestamps: true,
});

module.exports = Document;
