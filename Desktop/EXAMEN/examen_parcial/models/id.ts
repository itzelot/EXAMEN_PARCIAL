const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
import { hoteles } from "../models/Hotel.js";
import { gerentes } from "../models/Gerente.js";
import { habitaciones } from "../models/Habitacion.js";

class Hotel extends hoteles {
  otherPublicField: any;
  static id_htl: any;
}

Hotel.init({
  id_htl: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

const user = new Hotel();
Hotel.id_htl; // 1

class Gerente extends gerentes{
  otherPublicField: any;
  static id_htl: any;
}

Gerente.init({
  id_grt: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
},{ sequelize });

const user1 = new Gerente();
Gerente.id_grt; // 1

class Habitacion extends habitaciones{
  otherPublicField: any;
  static id_htl: any;
}

Gerente.init({
  id_hbt: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
},{ sequelize });

const user2 = new Gerente();
Gerente.id_hbt; // 1