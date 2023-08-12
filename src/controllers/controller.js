const { votarService,  adminService, validarService } = require('../services/services');


const home = (req ,res) => {
    res.render('index')
}

const votar = async (req, res) => {
    const voto = req.body;
    const nuevoVoto = await votarService(voto);
    //console.log(voto);
    res.render('gracias', {
        voto
    });
};



const admin = async (req, res) => {
    const result = await adminService();
    return result;
};

const votos = async (req, res) => {
    const datos = req.body;
    const validate = validarService(datos);

    if(validate) {
    
    const escrutinio = await adminService();

    res.render('admin/votos', {
        escrutinio
    });
} else {
    res.send('invalid enter');
}

};

const login = (req, res) => {
    res.render('login')
}



module.exports = {
    home,
    votar,
    admin,
    votos,
    login
}