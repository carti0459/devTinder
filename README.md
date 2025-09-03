# 💘 devTinder Backend

This is the **backend API** for [devTinder](#), a Tinder-like platform that helps developers connect based on skills, interests, and collaboration goals.

Built with **Node.js**, **Express.js**, and **MongoDB**, this backend powers the core functionality of devTinder, including authentication, profile management, connection requests, and validation.

> 📦 The **frontend** is hosted in a separate repository.  
> 👉 [https://github.com/carti0459/devTinder-web-Frontend](#)  

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Middleware**: cookie-parser, cors, JWT auth
- **Development Tools**: Nodemon, Postman
- **HTTP Client**: Axios (used on frontend)

---

## 📁 Project Structure

```plaintext
devTinder-backend/
├── node_modules/
├── src/
│   ├── config/
│   │   └── database.js           # MongoDB connection setup
│   ├── middlewares/
│   │   └── auth.js               # Authentication middleware
│   ├── models/
│   │   ├── connectionRequest.js  # Model for requests between users
│   │   └── user.js               # User schema
│   ├── routes/
│   │   ├── auth.js               # Auth routes (register/login)
│   │   ├── profile.js            # User profile management
│   │   ├── request.js            # Connection request routes
│   │   └── userroute.js          # General user data routes
│   ├── utils/
│   │   └── validation.js         # Input validation logic
│   └── app.js                    # Entry point of the server
├── .gitignore
├── package.json
├── package-lock.json
