import express from 'express'

const app = express()

/* app.get('/', (req, res) => {
  res.send('Olá, mundo!')
}) */ 
// o servidor segue ignorando a segunda requisição e não retorna a 2a resposta.
// alterada a rota da 1a requisição: definido '/'

app.get('/oi', (req, res) => {
  res.send('Hello World')
}) // ordem das requisições invertidas.
// alterada a rota da segunda requisição: definido '/hello'
// O servidor parece não aceitar acréscimos a '/', como em '/hello' ou '/oi'
// utilizando a rota '/' na segunda chamada a app com o método get

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
