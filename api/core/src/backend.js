class Calculadora {
    
    constructor(n1, n2) {
        this.n1 = n1
        this.n2 = n2
    }

    somar = () => {
        const resultado = this.n1 + this.n2
        return resultado
    }
    
    subtrair = () => {
        const resultado = this.n1 - this.n2
        return resultado
    }

    multiplicar = () => {
        const resultado = this.n1 * this.n2
        return resultado
    }    

    dividir = () => {
        const resultado = this.n1 / this.n2
        return resultado
    }

}

module.exports = { Calculadora }
