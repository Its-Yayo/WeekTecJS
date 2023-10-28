function applyRelations(sequelize){
    console.log(sequelize.models);
    
    const Proyecto = sequelize.models.proyecto;
    const Persona = sequelize.models.persona;
    const ProyectoPersona = sequelize.models.proyectopersona;

    Proyecto.belongsToMany(Persona,{through: ProyectoPersona});
    Persona.belongsToMany(Proyecto,{through: ProyectoPersona});
}

module.exports = {applyRelations};
