# DevConnectors

DevConnectors is a full-stack MERN social networking platform built for developers to connect, create professional profiles, share posts, and interact with other developers.

---

# 🚀 Live Demo

Frontend: https://devconnecto.netlify.app

---

# 📌 Features

* User Authentication using JWT
* Register & Login System
* Create & Update Developer Profiles
* Add Experience & Education
* GitHub Repository Integration
* Create, Like & Delete Posts
* Comment on Posts
* Protected Routes
* Responsive User Interface
* Full MERN Stack Architecture

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Redux
* React Router
* Axios
* CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## Deployment

* Frontend: Netlify
* Backend: Render
* Database: MongoDB Atlas

---

# 📂 Project Structure

```bash
devConnectors/
│
├── client/                 # React Frontend
├── config/                 # Database Configuration
├── middleware/             # Express Middleware
├── models/                 # MongoDB Models
├── routes/                 # API Routes
├── server.js               # Backend Entry Point
├── package.json
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
mongoURI=YOUR_MONGODB_URI
jwtSecret=YOUR_JWT_SECRET
githubClientId=YOUR_GITHUB_CLIENT_ID
githubSecret=YOUR_GITHUB_SECRET
```

Create another `.env` file inside the `client` directory:

```env
REACT_APP_API=YOUR_BACKEND_URL
```

---

# 📦 Installation & Setup

## Clone the Repository

```bash
git clone https://github.com/Manuha656/devConnectors.git
cd devConnectors
```

---

# 🔧 Backend Setup

Install backend dependencies:

```bash
npm install
```

Run backend server:

```bash
npm run server
```

---

# 💻 Frontend Setup

Move to client folder:

```bash
cd client
```

Install frontend dependencies:

```bash
npm install --legacy-peer-deps
```

Start frontend:

```bash
npm start
```

---

# 🚀 Build Frontend

```bash
npm run build
```

---

# 🌐 Deployment

## Frontend Deployment (Netlify)

### Build Settings

```bash
Base Directory: client
Build Command: CI=false npm install --legacy-peer-deps && npm run build
Publish Directory: build
```

### Environment Variable

```env
REACT_APP_API=YOUR_BACKEND_URL
```

---

## Backend Deployment (Render)

* Connect GitHub repository
* Add environment variables
* Deploy as Web Service

---

# 🔐 Authentication

This project uses JWT (JSON Web Token) based authentication for secure user login and protected routes.

---

# ⭐ Future Improvements

* Real-time Chat
* Notifications
* Friend Requests
* Dark Mode
* Image Uploads
* Improved UI/UX

---

# 👨‍💻 Author

### Manuha Enjamuri

GitHub: https://github.com/Manuha656

---

# 📄 License

This project is licensed under the MIT License.
