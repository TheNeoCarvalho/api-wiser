import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://qsqtrorhrzzsgy:93dd52720f2f7a266486bdedfb4f431b5a7ad89e546f8bf04187b2a77dc36764@ec2-3-214-3-162.compute-1.amazonaws.com:5432/d67d8feuu66ali', {dialect: 'postgres'})

export default sequelize
