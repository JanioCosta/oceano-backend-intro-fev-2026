import express from 'express'

const app = express()

app.get('/oi', (req, res) => {
  res.send('Olá, mundo!')
}) // o servidor segue ignorando a segunda requisição e não retorna a 2a resposta.

app.get('/', (req, res) => {
  res.send('Hello World')
}) // ordem das requisições invertidas.

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
