const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

try
{
    sequelize.authenticate();
    console.log('Connection to the database successful.')
}catch(err)
{
    console.log(`Failed to establish a connection to the database: ${err}`);
}

module.exports = sequelize;