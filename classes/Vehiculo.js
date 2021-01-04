'use strict'

module.exports = class Vehiculo {
    
    constructor(marca, modelo, precio) {
        this.marca = marca
        this.modelo = modelo
        this.precio = this.setPrice(precio)
        this.price = precio
    }

    setPrice(price) {
        let newPrice = parseFloat(price).toFixed(2).replace('.', ',')
        if (price>999) newPrice = `$${newPrice.slice(0, -6)}.${newPrice.slice(-6)}`
        else newPrice = `$${newPrice}`
        return newPrice
    }
}
