# ⚡ API REST Node.js — Pacôme SINWILLY

API RESTful sécurisée avec Express, MongoDB et JWT.

## ✨ Endpoints

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| GET | / | Test serveur | ❌ |
| POST | /api/auth/register | Créer un compte | ❌ |
| POST | /api/auth/login | Se connecter | ❌ |
| GET | /api/users/me | Mon profil | ✅ JWT |
| GET | /api/users | Tous les users | ✅ JWT |

## 🛠️ Technologies
- Node.js · Express
- MongoDB · Mongoose
- JWT · bcrypt
- CORS · dotenv

## 🚀 Installation

```bash
git clone https://github.com/Pacomesinwilly/api-node.git
cd api-node
npm install
```

Configure `.env` :
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/api_pacome
JWT_SECRET=ton_secret
```

```bash
node server.js
```

## 🧪 Tests Postman
Importe `pacome-api.postman_collection.json` dans Postman.

## 👤 Auteur
**Pacôme SINWILLY** — [GitHub](https://github.com/Pacomesinwilly)