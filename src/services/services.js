const { votarModel, resultadosModel } = require('../models/models');

const votarService = (voto) => {
    const result = votarModel(voto);
    return voto;

}

const adminService = () => {
    const result = resultadosModel();
    return result;
}

const validarService = (datos) => {
    console.log(datos)
    console.log(process.env.USER +" / .env / "+ process.env.PASSWORD)
    console.log(datos.email +" / datos.  / "+ datos.password)
    if(datos.email === process.env.USER && datos.password === process.env.PASSWORD) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    votarService,
    adminService,
    validarService
}