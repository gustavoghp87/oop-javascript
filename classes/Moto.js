'use strict'

const Vehiculo = require('./Vehiculo')

module.exports = class Moto extends Vehiculo {

    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio)
        this.cilindrada = cilindrada
    }

    printModel() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: ${this.precio}`)
    }

}
