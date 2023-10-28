const { error } = require('console');
const Sequielize = require('sequelize');

const sequelize = new Sequielize('semanatec', 'admin', 'Password', {
    dialect:'mysql', 
    host: 'weektec.cwa9rhwbm261.us-east-1.rds.amazonaws.com',
    define:{
        timesstamp:false,
        freezeTableName:true
    }
});

sequelize.sync()
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));


const Ejemplo = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequielize.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    },

    descripcion:{
        type: Sequielize.STRING,
        allowNull: true
    }
})
