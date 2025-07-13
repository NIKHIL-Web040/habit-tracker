# Personal Habit Tracker (Backend)

A fully functional backend API for a personal habit-tracking web application. Users can register, log in securely, and manage habits with automated progress tracking, reminders, and streak monitoring. Built with a scalable and modular backend architecture using Node.js, Express, and MongoDB.

## ✨ Features Implemented

- ✅ User Authentication (Register/Login)
- ✅ Create, Read, Update, Delete Habits (CRUD)
- ✅ Track:
  - Daily/Weekly frequency
  - Streaks and progress
  - Reminder time
  - Customizable habit question
- ✅ Modular MVC architecture
- ✅ RESTful API tested using Postman
- ✅ MongoDB schema relationships using `Mongoose`


## ⚙️ Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas) with Mongoose ODM
- **Testing & Dev Tools:** Postman, dotenv, nodemon

> 🛠️ *Frontend to be implemented using HTML, CSS, JavaScript (and later React.js)*

---

## 🚀 Getting Started Locally


git clone https://github.com/NIKHIL-Web040/habit-tracker.git
cd habit-tracker
npm install

Create a .env file in the root folder:

PORT=3000
MONGO_URI=your_mongodb_connection_string
Then run the server:

npm run dev
Server will start at http://localhost:3000

📡 API Endpoints Overview
Method	Endpoint	Description
POST	/api/register	Register new user
POST	/api/login	Login existing user
POST	/api/habits	Create new habit
GET	/api/habits/:userId	Fetch all habits for user
PUT	/api/habits/:habitId	Update a habit
DELETE	/api/habits/:habitId	Delete a habit

Each habit stores:

title, description

frequency, goal, streak

completedDates, progress

reminderTime, question

🧠 Planned Enhancements (Post-Submission)
 📈 Weekly Line Chart to visualize user habit flow

 🤖 AI habit coach to suggest improvements

 🔒 JWT-based Authentication

 🖥️ Full Frontend UI (React or plain HTML/CSS first)

🧑‍💻 Author
Nikhil Kohli
GitHub: NIKHIL-Web040

📌 Note
This is an ongoing project. For this submission, the backend is functional and tested using Postman. Frontend + AI-based features will be added progressively.


### ✅ Now do this:

1. Replace your current `README.md` with the above.
2. Commit and push:


git add README.md
git commit -m "Update README with detailed project overview"
git push
Once that’s done, your GitHub will look polished and professional — perfect for submitting the link confidently to that MNC form.

Let me know if you’d like to add screenshots, or if you need a demo.gif for later stages.
