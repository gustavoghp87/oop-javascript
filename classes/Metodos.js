'use strict'

module.exports = class Metodos {
    constructor(arreglo) {
        this.arreglo = arreglo
    }

    buscarY() {
        let retorna = ""
        this.arreglo.forEach(vehiculo => {
            if (vehiculo.modelo.indexOf('Y')>-1)
                retorna += `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.precio}`
        })
        return retorna
    }

    ordenarAsc() {
        let arreglo = this.arreglo
        let i = 0
        while (i<arreglo.length-1) {
            let j = 0
            while (j<arreglo.length-1) {
                if (arreglo[j].price < arreglo[j+1].price) {
                    let aux = arreglo[j]
                    arreglo[j] = arreglo[j+1]
                    arreglo[j+1] = aux
                }
                j++
            }
            i++
        }
        return arreglo
    }

    ordenarDesc() {
        let arreglo = this.arreglo
        let i = 0
        while (i<arreglo.length-1) {
            let j = 0
            while (j<arreglo.length-1) {
                if (arreglo[j].price > arreglo[j+1].price) {
                    let aux = arreglo[j]
                    arreglo[j] = arreglo[j+1]
                    arreglo[j+1] = aux
                }
                j++
            }
            i++
        }
        return `${arreglo[0].marca} ${arreglo[0].modelo}`
    }

    retornarAsc = () => {
        const ordenado = this.ordenarAsc()
        return `${ordenado[0].marca} ${ordenado[0].modelo}`
    }

    retornarAscTodos = () => {
        const ordenado = this.ordenarAsc()
        let retorna = ""
        ordenado.forEach(vehiculo => {
            retorna += `\n${vehiculo.marca} ${vehiculo.modelo}`
        })
        return retorna
    }

    print() {
        console.log("=============================")
        console.log(`Vehículo más caro: ${this.retornarAsc()}`)
        console.log(`Vehículo más barato: ${this.ordenarDesc()}`)
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${this.buscarY()}`)
        console.log("=============================")
        console.log(`Vehículos ordenados por precio de mayor a menor: ${this.retornarAscTodos()}`)
    }
}
