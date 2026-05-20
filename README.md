Mila — World's Living Cultures

A modern full-stack cultural learning platform where users explore traditions, food, history, arts, and folklore from around the world through interactive lessons, quizzes, achievements, and progress tracking.

🌐 About Mila

Mila is a full-stack cultural exploration website built with:

React + Vite for the frontend
Flask + Python for the backend API
HTML5 + CSS3 for structure and styling
JavaScript (ES6+) for frontend logic
SQLite / SQLAlchemy for data storage

The platform allows users to:

Discover cultures from different regions
Read interactive topic lessons
Take quizzes with explanations
Earn XP and badges
Track learning progress
Create accounts and log in securely

Unlike a single-page HTML file, Mila is a complete multi-page web application with a separated frontend and backend architecture.

🧱 Project Architecture
mila/
│
├── frontend/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── api.js
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Flask Backend
│   ├── app.py
│   ├── models.py
│   ├── routes/
│   ├── seed.py
│   ├── requirements.txt
│   └── database.db
│
└── README.md
🚀 Features
🌍 Cultural Exploration
Explore cultures from 15+ countries
Learn about:
History
Traditions
Food
Arts
Folklore
Language
Festivals
🧠 Quiz System
20 quiz questions per country
Randomized question generation
Instant answer feedback
Difficulty levels
XP reward system
👤 Authentication
User registration
Secure login system
Logout functionality
Persistent sessions
📊 Dashboard
XP tracking
Quiz history
Progress percentages
Earnable badges
Streak tracking
📱 Responsive Design
Mobile-friendly layout
Modern UI inspired by Instagram and editorial travel apps
Animated transitions
Responsive navigation
🛠 Tech Stack
Layer	Technology
Frontend	React + Vite
Backend	Flask
Database	SQLite
Styling	CSS3
Routing	React Router DOM
API	REST API
Authentication	Flask Sessions / JWT
State Management	React Hooks
📄 Website Pages
Page	Purpose
Home	Landing page and featured cultures
Explore	Search and filter cultures
Country Details	Lessons and culture topics
Quiz	Interactive quiz engine
Dashboard	User progress and achievements
Login	Sign in page
Register	Create account page
🌎 Cultures Included
Japan
India
Morocco
Brazil
France
Kenya
China
Greece
Italy
Egypt
Turkey
South Korea
Spain
Algeria
Mexico

Each country includes:

Topic lessons
Cultural information
20 quiz questions
XP rewards