import { Sequelize } from 'sequelize'
require('dotenv').config()

const {
    POSTGRES_DB,
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASS,
    POSTGRES_PORT,
    DIALECT,
} = process.env

const sequelize = new Sequelize(`${DIALECT}://${POSTGRES_USER}:${POSTGRES_PASS}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`, {dialect: 'postgres'})

export default sequelize