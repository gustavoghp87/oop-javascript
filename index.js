'use strict'

const Auto = require('./classes/Auto')
const Moto = require('./classes/Moto')
const Metodos = require('./classes/Metodos')


const vehiculo1 = new Auto("Peugeot", "206", 4, 200000)
const vehiculo2 = new Moto("Honda", "Titan", "125cc", 60000)
const vehiculo3 = new Auto("Peugeot", "208", 5, 250000)
const vehiculo4 = new Moto("Yamaha", "YBR", "160cc", 80500.5)

vehiculo1.printModel()
vehiculo2.printModel()
vehiculo3.printModel()
vehiculo4.printModel()

const metodos = new Metodos([vehiculo1, vehiculo2, vehiculo3, vehiculo4])
metodos.print()
