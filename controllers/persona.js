const Seq = require('sequelize');
const sequelize = require('../util/database');
const Persona = sequelize.models.persona;

exports.postAgregarPersona=(req,res)=>{
    console.log(req.body);
    Persona.create(req.body)
        .then(result=>{
            console.log("Success");
            res.send("Success");
        })
        .catch(error=>{
            console.log(error);
            res.send('Error")
        })
}

exports.getConsultarPersonas = async (ree, res) =>  {
    try {
        const result = await Persona.findAll();
        res.send(result);
    } catch(error) {
        console.log(error);
        res.send('Error');
    }
}
