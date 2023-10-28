const Seq = require('sequelize');
const sequelize = require('../util/database');
const Proyecto = sequelize.models.proyecto;

exports.postAgregarProyecto=(req,res)=>{
    console.log(req.body);
    Proyecto.create(req.body)
        .then(result=>{
            console.log("Success");
            res.send("Success");
        })
        .catch(error=>{
            console.log(error);
            res.send('Error')
        })
}

exports.getConsultarProyectos = async (ree, res) =>  {
    try {
        const result = await Proyecto.findAll();
        res.send(result);
    } catch(error) {
        console.log(error);
        res.send('Error')
    }
}
