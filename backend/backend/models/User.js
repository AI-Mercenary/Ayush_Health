const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

// Define the User model
const User = sequelize.define('User', {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
    aadharNo:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pwd:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pincode: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    regId:{
        type:DataTypes.STRING,
        unique:true,
     },
    contact:{
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    regDate:{
        type:DataTypes.DATE,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    orgType:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    subOrgType:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    bankHolderName:{
        type:DataTypes.STRING,
    },
    accountNo:{
        type:DataTypes.BIGINT,
    },
    bankName:{
        type:DataTypes.STRING,
    },
    branchName:{
        type:DataTypes.STRING,
    },
    IFSC:{
        type:DataTypes.STRING,
    },
}, {
    tableName: 'user',
    timestamps: true,
});

module.exports = User;
