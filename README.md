# 📇 Contact Manager Application

A full-stack **Contact Management Application** built with **Node.js**, **Express**, **MongoDB**, and **React**.  
This app allows users to **register, log in, and securely manage their personal contacts**.

---

## 🚀 Features
- 🔐 **User Authentication** (JWT-based login & signup)  
- 👥 **CRUD Operations** – Create, Read, Update, Delete contacts  
- 🛡️ **Secure Routes** with authorization middleware  
- 🎨 **Modern UI** built with **React + TailwindCSS**  
- ⚡ **RESTful API** with Express  
- 💾 **MongoDB Database** for persistent storage  

---

## 🏗️ Tech Stack
**Frontend:**
- **React**  
- **TailwindCSS**  
- **Axios**  

**Backend:**
- **Node.js**  
- **Express.js**  
- **MongoDB** (Mongoose ODM)  
- **JWT Authentication**  

---

## 📂 Project Structure
Contact_Application/
├── backend/ # Express + MongoDB API
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── controllers/ # API controllers
│ ├── middleware/ # Auth & error handling middleware
│ ├── config/ # DB connection & JWT utilities
│ ├── server.js # Entry point
│ └── package.json
│
├── frontend/ # React + Tailwind frontend
│ ├── public/ # Static assets
│ ├── src/ # React components & pages
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── main.jsx
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/S1h7i0v3i/Contact-Application.git
cd Contact_Application
2️⃣ Backend Setup
bash
Copy code
cd mycontacts-backend
npm install
Create a .env file inside backend/ with:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run backend server:

bash
Copy code
npm start
3️⃣ Frontend Setup
bash
Copy code
cd mycontacts-frontend
npm install
npm start   
🔒 Security Aspects
✅ Passwords hashed using bcrypt

✅ JWT tokens for authentication

✅ Middleware for protecting private routes


