'use strict'

const Vehiculo = require('./Vehiculo')

module.exports = class Auto extends Vehiculo {
    
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio)
        this.puertas = puertas
    }

    printModel() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${this.precio}`)
    }
}
