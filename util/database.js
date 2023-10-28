const Sequelize= require('sequelize');
const {applyRelations} = require('./relations')

const sequelize = new Sequelize('weektec','admin','admin',{
    dialect:'mysql',
    host:'weektec.cwa9rhwbm261.us-east-1.rds.amazonaws.com',
    define:{
        timestamps:false,
        freezeTableName:true
    }
});

const modelDefiners =[
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')    
];

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

applyRelations(sequelize);
module.exports = sequelize;