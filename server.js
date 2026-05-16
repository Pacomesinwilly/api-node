const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))

// Route test
app.get('/', (req, res) => {
  res.json({
    message: '🚀 API Pacôme SINWILLY — Node.js + Express + MongoDB',
    version: '1.0.0',
    status: 'running',
  })
})

// Connexion MongoDB
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/api_pacome'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connecté')
    app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`))
  })
  .catch(err => console.error('❌ Erreur MongoDB :', err))