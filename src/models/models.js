const { conn } = require('../config/conn');


const votarModel = async (voto) => {

    try {
        await conn.query('INSERT INTO votacion SET ?;', 
        {
            nombre: voto.nombre,
            mail: voto.email,
            massa: parseInt(voto.sergioMassa),
            grabois: parseInt(voto.juanGrabois),
            larreta: parseInt(voto.rodriguezLarreta),
            bullrich: parseInt(voto.patriciaBullrich),
            milei: parseInt(voto.javierMilei),
            solano: parseInt(voto.gabrielSolano),
            moreno: parseInt(voto.guillermoMoreno),
            escobar: parseInt(voto.jesusEscobar),
            schiaretti: parseInt(voto.juanSchiaretti),
            castanieira: parseInt(voto.manuelaCastanieira),
            ramal: parseInt(voto.marceloRamal),
            bregman: parseInt(voto.myriamBregman),
            otros: parseInt(voto.otros),
            blanco: parseInt(voto.blanco),
            fecha: new Date()
            
        });

    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo votar porque ${e}`
        }
        return error;        
    }
};

const resultadosModel = async () => {
    try {
        const [ rows ] = await conn.query('SELECT * from votacion');
       // console.log(rows);
        return rows;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo votar porque ${e}`
        }
        return error; 
    }
};


module.exports = {
    votarModel,
    resultadosModel
}