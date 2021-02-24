import { Sequelize } from 'sequelize'
require('dotenv').config()

const {
    DATABASE_DB,
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_PORT,
    DIALECT,
} = process.env

const sequelize = new Sequelize(`${DIALECT}://${DATABASE_USER}:${DATABASE_PASS}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_DB}`, {dialect: 'postgres'})

export default sequelize
