const convert = (cotacao, quantidade) => {
  if (typeof cotacao == String) {
    return parseFloat(cotacao.replace(',', '.')) * parseFloat(quantidade);
  }
  return parseFloat(cotacao) * parseFloat(quantidade);

}

const toMoney = (valor) => {
  return parseFloat(valor).toFixed(2).toString().replace('.', ',');
}
module.exports = {
  convert,
  toMoney
}