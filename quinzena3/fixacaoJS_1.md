~~~javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFixo = 2000
 let comissaoVenda = (qtdeCarrosVendidos*100+(0.05*valorTotalVendas))
 let totalSalario = salarioFixo+comissaoVenda
 return totalSalario

}
~~~