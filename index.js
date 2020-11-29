const express = require('express');
const path = require('path');
const convert = require('./lib/convert');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/cotacao', (req, res) => {
  const { cotacao, quantidade } = req.query;
  if (cotacao == "" || quantidade == "") {
    res.render('erro');
  } else {
    const conversao = convert.toMoney(convert.convert(cotacao, quantidade));
    res.render('cotacao', {
      cotacao: convert.toMoney(cotacao),
      quantidade,
      conversao
    })
  }
})
app.get('/', (req, res) => {
  res.render('home');
})


app.listen(3000, err => {
  if (err) {
    console.log('Não foi possível iniciar.')
  } else {
    console.log('ConvertMyMoney online.')
  }
})
