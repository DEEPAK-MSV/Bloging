const {Sequelize} = require("sequelize")

const sequelize =new Sequelize('database-db','user','pass',{
    dialect:'sqlite',
    storage:'./data.sqlite'

})

module.exports = sequelize;