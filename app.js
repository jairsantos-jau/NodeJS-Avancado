const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaCep = require('./src/functions/buscaCep')
const buscaIbge = require('./src/functions/buscaIbge')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// declarando que vou usar o ejs
app.set('view engine', 'ejs')
// Mostrando para o express onde ta minha pasta views
app.set('views', './src/views')

// renderizando minha pagina principal
app.get('/', (req, res) => {
  // chamando o arquivo da minha view
    res.render('index')
})

// pegando os dados da minha view
app.post('/envia-cep', async (req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})

//pega dados com numero com ibge
// pegando os dados da minha view
app.post('/envia-ibge', async (req, res) => {
    const { ibge } = req.body
    const resultado2 = await buscaIbge(ibge)

    res.render('resultado2', {dado2: resultado2})
})

app.listen(3333)