const express = require('express')
const cors = require('cors')
// const amoCRM = require('./amoCRM') //OAuth авторизация amoCRM

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// amoCRM.reg() //OAuth авторизация amoCRM

const dealsRouter = require('./routes/deals')

app.use('/deals', dealsRouter)

app.listen(port, ()=> {
    console.log(`Backend lives on port ${port}`)
})