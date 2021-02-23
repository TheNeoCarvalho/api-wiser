import Sequelize, { Model, Optional } from 'sequelize'
import { Link } from './link'

import database from '../database/database'

interface ILinkCreationAttributes extends Optional<Link, "id"> { }

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link { }

const LinkModel = database.define<ILinkModel>('link', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    code: {
        type: Sequelize.STRING(10),
        unique: true,
        allowNull: false
    },
    expired: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    dateExpired: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


export default LinkModel

