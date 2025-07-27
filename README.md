# 📌 JobTrackr

**JobTrackr** is a full-stack job tracking web application that allows users to register, log in, and manage their job applications. It offers a clean, user-friendly interface to add, update, and delete job entries, track application statuses, and view helpful statistics. The app is built using the **MERN** stack with secure **JWT authentication** and **MongoDB Atlas** for cloud storage.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (MongoDB Atlas)  
- **Authentication**: JWT (JSON Web Token)  

---

## ✨ Features

- ✅ User Registration & Login with secure JWT-based authentication  
- 🔐 Protected Routes accessible only by authenticated users  
- 📝 Add, Edit, and Delete job entries  
- 📊 Visual job statistics (Applied, Interviewing, Rejected, etc.)  
- ☁️ MongoDB Atlas used for cloud storage  
- 💡 Clean and modern UI with responsive design  

---

## 🔐 Environment Variables (.env)

In the root of your backend directory, create a `.env` file and add the following:

```env
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_super_secret_key

🚀 How to Run the Project Locally
1️⃣ Clone the Repository

git clone https:(https://github.com/Dasaridileep/Jobtracker.git)
2️⃣ Set Up the Backend

cd jobtrackr/server
npm install
npm start
3️⃣ Set Up the Frontend

cd ../client
npm install
npm start
📌 Folder Structure
jobtrackr/
│
├── client/         # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
├── server/         # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
🧠 Future Scope

🔍 Advanced filtering (e.g., by company, location, date applied)

🤝 Integration with LinkedIn/Indeed APIs

📧 Email reminders and follow-up alerts

🛠️ Admin dashboard for recruiters

