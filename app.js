const {produtos} = require("./model/modulos")
const moment = require ('moment')
const {exibeTela, calculaValor,}= require('./lib/funcao')
let data = moment().format("DD/MM/YYYY")
 exibeTela("******Ruby Rose******")
 exibeTela("***Finalize seu pagamento***")
 exibeTela("***Os produtos que não possuimos no estoque não será contado***")
 exibeTela("----"+data+"----")
 let valorTotal = 0;
 for(let i =0; i<produtos.length; i++){
     valorTotal += calculaValor(produtos[i].unidade, produtos[i].valor)
     if(produtos[i].unidade > 0){
     exibeTela(produtos[i].id+' - '+produtos[i].nome+' - '+produtos[i].unidade+' unidades - $'+ produtos[i].valor)
    }
 }
 exibeTela('***Valor Total R$'+valorTotal+'***')
 