import express from 'express'
let app = express()

app.use(express.static('./docs'))

app.listen(10000)