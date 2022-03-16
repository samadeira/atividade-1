const { produtos } = require("../model/modulos")

exports.calculaValor = (valor, unidade) =>{
    return valor*unidade
}
exports.exibeTela = (valor) =>{
    console.log(valor)
}
