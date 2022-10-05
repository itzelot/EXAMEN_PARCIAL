import { gerentes } from "../models/Gerente.js";
import { hoteles } from "../models/Hotel.js";
import { habitaciones } from "../models/Habitacion.js";

const paginaInicio= (req,res) => {
    res.render("inicio",{
        pagina: "Inicio",
    });
}

const paginaHoteles=async (req, res) =>{
    //obtener registros
    const hotel=await hoteles.findAll({
        attributes: ['id_htl','imagen','nombre','direccion','telefono','correo','id_grt']
    });

    res.render("hoteles",{
        pagina:"Hoteles",
        hotel: hotel
    });
}

const paginaGerentes=async (req,res) => {
    //obtener registros
    const gerente=await gerentes.findAll({
        attributes:['nombre','ap_paterno','ap_materno','telefono']
    });

    res.render("gerentes",{
        pagina:"Gerentes",
        gerente: gerente
    });
}

const paginaHabitaciones=async (req,res) => {
    //obtener registros
    const habitacion=await habitaciones.findAll({
        attributes:['piso','nombre','refrigerador','id_htl']
    });

    res.render("habitaciones",{
        pagina:"Habitaciones",
        habitacion: habitacion
    });
}

export{
    paginaInicio,
    paginaHoteles,
    paginaGerentes,
    paginaHabitaciones
}