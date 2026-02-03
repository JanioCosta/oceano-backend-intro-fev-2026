import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Olá, mundo!')
}) // o servidor segue ignorando a segunda requisição e não retorna a 2a resposta.
// alterada a rota da 1a requisição: definido '/'

app.get('/hello', (req, res) => {
  res.send('Hello World')
}) // ordem das requisições invertidas.
// alterada a rota da segunda requisição: definido '/hello'

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
