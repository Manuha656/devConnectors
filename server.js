require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express()
const connectDB = require('./config/db')

// Connect Database
connectDB()

// CORS
app.use(cors({
    origin: 'https://devconnecto.netlify.app'
}))

// Init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('API Running')
})

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))