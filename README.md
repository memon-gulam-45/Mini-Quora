# Mini Quora 📝

**Mini Quora** is a Quora-style posts application built using **Node.js**, **Express**, and **EJS**, designed to demonstrate **CRUD operations** and **RESTful API principles**.  
The project features a **modern, responsive UI built with Tailwind CSS** and follows clean MVC-style structuring using EJS partials.

🔗 **Live Demo:**  
👉 https://mini-quora-7yc7.onrender.com

---

## 🚀 Features

- Create, read, update, and delete posts (CRUD)
- RESTful routing using Express
- Server-side rendering with EJS
- Reusable layout using EJS partials (header & footer)
- Modern UI built with Tailwind CSS
- Card-based feed layout
- Clean form UI with proper UX
- Empty-state handling
- Confirmation before deleting posts

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Styling:** Tailwind CSS (CDN)
- **Utilities:** UUID, Method Override
- **Deployment:** Render

---

## 📂 Project Structure

<pre>
MINI QUORA (ARRAY)
├── node_modules/
├── public/
│   └── style.css
├── views/
│   ├── partials/
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
├── .gitignore
├── index.js
├── package-lock.json
└── package.json
</pre>

---

## 🧠 Learning Objectives

This project was built to:

- Understand CRUD operations in Express
- Learn RESTful API design
- Practice server-side rendering with EJS
- Use method-override for PATCH & DELETE requests
- Structure views using partials
- Improve UI rapidly using Tailwind CSS
- Gain experience deploying Node.js applications

---

## ⚠️ Important Note

> This application uses **in-memory storage (array)** for posts.  
> All data resets automatically when the server restarts.

This limitation is intentional and aligns with the project's learning-focused nature.

---

## 🌱 Future Improvements

- Persist data using a database (MongoDB)
- User authentication
- Likes and comments
- Timestamps for posts
- Pagination
- Dark mode

---

## 👤 Author

**Gulam Mohyudin Memon**  
_Aspiring Full-Stack Developer (MERN)_

---

## 📜 License

This project is open-source and available for learning and educational purposes.
