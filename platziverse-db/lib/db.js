'use strict'

const Sequelize = require('sequelize')
let sequelize = null

// De esta forma hacemos un singleton, si no esta creado lo crea, luego si esta creado retorna el que ya creamos
module.exports = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
