/*c) Elaborar um programa para uma loja, o qual leia o preço de um produto e
 informe as opções de pagamento da loja. Calcule e informe o valor para
 pagamento à vista com 10% de desconto e o valor em 3x.
 Exemplo:
 Preço R$: 60.00
 À Vista R$: 54.00
 Ou 3x de R$: 20.00*/


function calcular(){
var precoPeça = document.getElementById('preco')
var formasPagamento = document.getElementById('resultado')

var valorAvista = Number(precoPeça.value) * 0.10
var precoAvista = Number(precoPeça.value) - valorAvista
var precoParcela = Number(precoPeça.value) / 3

formasPagamento.innerHTML = `As formas de pagamento são: ${(precoAvista)} e  ${precoParcela}`

}