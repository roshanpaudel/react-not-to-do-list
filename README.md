# 🧠 Habit Tracker App (React + Vite)

A responsive and beginner-friendly **Habit Tracker** web app built with **React** and **Vite**. This application allows users to manage their daily tasks and habits, helping them visualize how they allocate their time and where they can make improvements.

---

## ✨ Features

- **✅ Add New Tasks**  
  Input a task name and estimated hours to add a task to your active task list.

- **📋 Task List View**  
  See all added tasks with corresponding hours in an interactive list.

- **🚫 Habit List**  
  Move tasks you want to reduce (bad habits) into a separate "Habits to Reduce" list.

- **🔁 Task-Habit Switching**  
  Seamlessly switch tasks between the Task List and Habit List with one click.

- **⏱ Time Tracking**  
  Instantly view total hours spent on tasks and the potential time saved if habits were avoided.

- **🗑 Task Deletion**  
  Remove tasks from either list with confirmation to avoid accidental deletions.

- **💡 Responsive UI**  
  Mobile and desktop-friendly layout powered by Bootstrap and Font Awesome.

---

## ⚙️ Tech Stack

| Technology      | Purpose                         |
|----------------|----------------------------------|
| React (via Vite) | UI rendering and state management |
| HTML & CSS      | Markup and styling               |
| Bootstrap       | Responsive layout and components |
| JavaScript (ES6+)| Application logic               |
| Font Awesome    | Iconography                      |
| Yarn            | Dependency management            |

---

## 🚀 Getting Started

### 🔄 Clone the Repository

```bash
git clone https://github.com/your-username/habit-tracker-app.git
cd habit-tracker-app
📦 Install Dependencies
Make sure you have Yarn installed.

bash
Copy
Edit
yarn install
▶️ Start the Development Server
bash
Copy
Edit
yarn dev
Then open your browser at:
📍 http://localhost:5173/

🔧 Project Structure
php
Copy
Edit
habit-tracker-app/
├── public/                   # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/           # Reusable React components (TaskList, HabitList, Form, etc.)
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Entry point for React via Vite
│   ├── utils/                # Utility functions (e.g., ID generator)
│   └── styles/               # Custom CSS or SCSS files
│       └── styles.css
├── index.html                # Base HTML template
├── package.json              # Project metadata and scripts
├── vite.config.js            # Vite configuration
└── README.md
