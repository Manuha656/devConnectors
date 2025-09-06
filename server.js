const express = require('express');
const app = express()
const connectDB = require('./config/db')

app.get('/', (req,res)=>{
    res.send('API Running')
})

//connect DataBase
connectDB()

//Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server started in the port ${PORT}`))