import express from 'express'
const app = express()
const PORT = 6000
app.use(express.json())
app.listen(PORT, () => {
    console.log(
        'backend started on port:' + PORT
    )
})