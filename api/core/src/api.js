const { Calculadora } = require('./backend.js');

const express = require('express');
const { response } = require('express');
const app = express();
const porta = 3000


// Definição de rotas

app.use(express.json());

app.get('/', (req, response) => {
    console.log('[!] Nova requesição (/)')
    response.send({'app': 'Calculadora Bohr', 'framework':'express.js', 'servidor': 'online', 'status': 200})
})

app.post('/calcular', (req, response) => {
    console.log('[!] Nova requesição (/calcular)')

    const { operacao, n1, n2 } = req.body

    const valores = new Calculadora(n1, n2)

    switch(operacao) {
        case 'somar':
            resultado = valores.somar();
            break;
        case 'subtrair':
            resultado = valores.subtrair();
            break;
        case 'multiplicar':
            resultado = valores.multiplicar();
            break;
        case 'dividir':
            resultado = valores.dividir();
            break;
        default:
            resultado = null;
    }

    response.send({
        'status': 200,
        'operação': operacao,
        'resultado': resultado

    })
})


// Inicialização da aplicação
app.listen(porta, () => {
    console.log('[#] SERVIDOR ONLINE')
})
