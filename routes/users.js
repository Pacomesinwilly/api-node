const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const User = require('../models/User')

// GET /api/users — liste tous les users (protégé)
router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

// GET /api/users/me — profil connecté
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

module.exports = router