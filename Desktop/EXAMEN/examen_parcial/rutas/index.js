import express from "express";
import { eliminarHoteles, guardarHoteles, listaHoteles, modificarHoteles } from "../controller/hotelesController.js";
import { paginaInicio, paginaGerentes, paginaHabitaciones, paginaHoteles } from "../controller/paginasController.js";

const rutas = express.Router();
rutas.get("/", paginaInicio);
rutas.get("/hoteles",paginaHoteles);
rutas.get("/gerentes",paginaGerentes);
rutas.get("/habitaciones",paginaHabitaciones);

rutas.post("/hoteles",guardarHoteles);
rutas.get("/listaHoteles",listaHoteles);
rutas.get("/modificar",modificarHoteles);
rutas.get("/eliminar",eliminarHoteles);

export default rutas;