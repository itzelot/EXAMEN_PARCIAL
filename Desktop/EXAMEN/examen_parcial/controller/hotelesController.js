import { hoteles } from '../models/Hotel.js';
import { gerentes } from '../models/Gerente.js';

const guardarHoteles = async (req,res) => {
    const {id_htl,  imagen, nombre, direccion, telefono, correo, id_grt } = req.body;
    const errores = [];
    if (imagen.trim()==="") {
        errores.push({mensaje: "La imagen no debe ser vacío"});
    }
    if (nombre.trim()==="") {
        errores.push({mensaje: "El nombre no debe ser vacío"});
    }
    if (direccion.trim()==="") {
        errores.push({mensaje: "La direccion no debe ser vacío"});
    }
    if (telefono.trim()==="") {
        errores.push({mensaje: "El telefono no debe ser vacío"});
    }
    if (correo.trim()==="") {
        errores.push({mensaje: "El correo no debe ser vacío"});
    }
    if (errores.length>0){
        res.render("hotel",{
            pagina: "Hoteles",
            errores,
            id_htl,
            imagen,
            nombre,
            direccion,
            telefono,
            correo,
            id_grt
        });
    }   else{
        console.log(id_htl);
        if(id_htl>0){
            //Actualizar
            console.log('actualiza');
            try{
                await hoteles.update({
                    imagen,
                    nombre,
                    direccion,
                    telefono,
                    correo,
        
                }, {where: {id:id_htl}});
                res.redirect('/hoteles')
            } catch(error){
            console.log(error)
            }
        } else {
            //Almacenar en la base de datos
            try{
                await hoteles.create({
                    imagen,
                    nombre,
                    direccion,
                    telefono,
                    correo
                });
                res.redirect('/hoteles')
            } catch (error) {
                console.log(error)
            }
        }
    }
};

const listaHoteles = async(req, res) => {
    //obtener registros
    const hotel=await hoteles.findAll({
        attributes: ['id_htl','imagen','nombre','direccion','correo', 'id_grt']
    });

    res.render("listaHoteles",{
        pagina:"Hoteles",
        hotel:hotel
    })
};


const modificarHoteles = async(req, res) => {
    //obtener registros
    const hotel=await hoteles.findAll({
        attributes: ['id_htl','imagen','nombre','direccion','correo', 'id_grt']
    });
    console.log('Listo '+ req.query.id_htl)
    try{
        const htl = await hoteles.findByPk(req.query.id_htl)
        console.log(htl);
    const errores = [];
        res.render("hotel",{
            pagina: "Hoteles",
            errores,
            id_htl:htl.id_htl,
            imagen:htl.imagen,
            nombre:htl.nombre,
            direccion:htl.direccion,
            correo:htl.correo,
            id_grt: htl.id_grt
        });
    } catch (error){
        console.log(error);
    }
};


const eliminarHoteles = async (req,res) => {
    const hotel=await hoteles.findAll({
        attributes: ['id_htl','imagen','nombre','direccion','correo', 'id_grt']
    });
    try{
        await hoteles.destroy({
            where: {id_htl: req.query.id_htl}});
    } catch (error){
        console.log(error);
    };
    res.redirect('/hoteles')
    console.log('Listo borrar ' + req.query.id_htl)
};

//#########################################################
const guardarGerentes = async (req,res) => {
    const {id_grt,  nombre, ap_paterno, ap_materno, telefono } = req.body;
    const errores = [];
    if (nombre.trim()==="") {
        errores.push({mensaje: "El nombre no debe ser vacío"});
    }
    if (ap_paterno.trim()==="") {
        errores.push({mensaje: "El apellido paterno no debe ser vacío"});
    }
    if (ap_materno.trim()==="") {
        errores.push({mensaje: "El apellido materno no debe ser vacío"});
    }
    if (telefono.trim()==="") {
        errores.push({mensaje: "El telefono no debe ser vacío"});
    }
    if (errores.length>0){
        res.render("gerente",{
            pagina: "Gerentes",
            errores,
            id_grt,
            nombre,
            ap_paterno,
            ap_materno,
            telefono
        });
    }   else{
        console.log(id_grt);
        if(id_grt>0){
            //Actualizar
            console.log('actualiza');
            try{
                await gerentes.update({
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono,
        
                }, {where: {id:id_grt}});
                res.redirect('/gerentes')
            } catch(error){
            console.log(error)
            }
        } else {
            //Almacenar en la base de datos
            try{
                await gerentes.create({
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono
                });
                res.redirect('/gerentes')
            } catch (error) {
                console.log(error)
            }
        }
    }
};

const listaGerentes = async(req, res) => {
    //obtener registros
    const gerente=await gerentes.findAll({
        attributes: ['id_grt','nombre','ap_paterno','ap_materno', 'telefono']
    });

    res.render("listaGerentes",{
        pagina:"Gerentes",
        gerente: gerente
    })
};


const modificarGerentes = async(req, res) => {
    //obtener registros
    const gerente=await gerentes.findAll({
        attributes: ['id_grt','nombre','ap_paterno','ap_materno','telefono']
    });
    console.log('Listo '+ req.query.id_htl)
    try{
        const grt = await gerentes.findByPk(req.query.id_grt)
        console.log(grt);
    const errores = [];
        res.render("gerente",{
            pagina: "Gerentes",
            errores,
            id_grt:grt.id_grt,
            imagen:grt.imagen,
            nombre:grt.nombre,
            ap_paterno:grt.ap_paterno,
            ap_materno:grt.ap_materno,
            telefono:grt.telefono,
        });
    } catch (error){
        console.log(error);
    }
};


const eliminarGerentes = async (req,res) => {
    const gerente=await gerentes.findAll({
        attributes: ['id_grt','nombre','ap_paterno','ap_materno','telefono']
    });
    try{
        await gerentes.destroy({
            where: {id_grt: req.query.id_grt}});
    } catch (error){
        console.log(error);
    };
    res.redirect('/gerentes')
    console.log('Listo borrar ' + req.query.id_grt)
};

//#########################################################
const guardarHabitaciones = async (req,res) => {
    const {id_hbt, piso, nombre, refrigerador, id_htl } = req.body;
    const errores = [];
    if (piso.trim()==="") {
        errores.push({mensaje: "El piso no debe ser vacío"});
    }
    if (nombre.trim()==="") {
        errores.push({mensaje: "El nombre no debe ser vacío"});
    }
    if (refrigerador.trim()==="") {
        errores.push({mensaje: "El refrigerador no debe ser vacío"});
    }
    if (id_htl.trim()==="") {
        errores.push({mensaje: "El id_htl no debe ser vacío"});
    }
    if (errores.length>0){
        res.render("habitacion",{
            pagina: "Habitacion",
            errores,
            id_grt,
            piso,
            nombre,
            refrigerador,
            id_htl
        });
    }   else{
        console.log(id_hbt);
        if(id_hbt>0){
            //Actualizar
            console.log('actualiza');
            try{
                await habitaciones.update({
                    piso,
                    nombre,
                    refrigerador,
                    id_htl
        
                }, {where: {id:id_hbt}});
                res.redirect('/habitaciones')
            } catch(error){
            console.log(error)
            }
        } else {
            //Almacenar en la base de datos
            try{
                await habitaciones.create({
                    piso,
                    nombre,
                    refrigerador,
                    id_htl
                });
                res.redirect('/habitaciones')
            } catch (error) {
                console.log(error)
            }
        }
    }
};

const listaHabitaciones = async(req, res) => {
    //obtener registros
    const habitacion=await habitaciones.findAll({
        attributes: ['id_hbt','piso','nombre','refrigerador','id_htl']
    });

    res.render("listaHabitaciones",{
        pagina:"Habitaciones",
        habitacion: habitacion
    })
};


const modificarHabitaciones = async(req, res) => {
    //obtener registros
    const habitacion=await habitaciones.findAll({
        attributes: ['id_hbt','piso','nombre','refrigerador','id_htl']
    });
    console.log('Listo '+ req.query.id_hbt)
    try{
        const hbt = await habitaciones.findByPk(req.query.id_hbt)
        console.log(hbt);
    const errores = [];
        res.render("habitacion",{
            pagina: "Habitaciones",
            errores,
            id_hbt:hbt.id_hbt,
            piso:hbt.piso,
            nombre:hbt.nombre,
            refrigerador:hbt.refrigerador,
            id_htl:hbt.id_htl
        });
    } catch (error){
        console.log(error);
    }
};


const eliminarHabitaciones = async (req,res) => {
    const habitacion=await habitaciones.findAll({
        attributes: ['id_hbt','piso','nombre','refrigerador','id_htl']
    });
    try{
        await habitaciones.destroy({
            where: {id_hbt: req.query.id_hbt}});
    } catch (error){
        console.log(error);
    };
    res.redirect('/habitaciones')
    console.log('Listo borrar ' + req.query.id_hbt)
};

export {guardarHoteles,listaHoteles,modificarHoteles, eliminarHoteles,guardarGerentes,listaGerentes,modificarGerentes, eliminarGerentes,
    guardarHabitaciones,listaHabitaciones,modificarHabitaciones,eliminarHabitaciones};