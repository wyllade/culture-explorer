Mila — World's Living Cultures

A modern full-stack cultural learning platform where users explore traditions, food, history, arts, and folklore from around the world through interactive lessons, quizzes, achievements, and progress tracking.

🌐 About Mila

Mila is a full-stack cultural exploration website built with:

React + Vite for the frontend
Flask + Python for the backend
HTML5 + CSS3 for styling and structure
JavaScript (ES6+) for frontend logic
SQLite / SQLAlchemy for data storage

The platform allows users to:

Discover cultures from different regions
Read interactive topic lessons
Take quizzes with explanations
Earn XP and badges
Track learning progress
Create accounts and log in securely

Mila is a complete multi-page web application with separate frontend and backend architecture.

🧱 Project Structure
mila/
│
├── frontend/
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
├── backend/
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
⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/wyllade/mila.git

cd mila
💻 Frontend Setup (React)
cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173
🐍 Backend Setup (Flask)
cd backend

pip install -r requirements.txt

python seed.py

python app.py

Backend runs on:

http://localhost:5000
🔗 Connecting Frontend and Backend

The React frontend communicates with Flask through REST APIs.

Example API base URL:

const API_BASE = "http://localhost:5000/api";

Example fetch request:

fetch(`${API_BASE}/countries`)
📡 API Endpoints
Method	Endpoint	Description
GET	/api/countries	Get all countries
GET	/api/countries/:slug	Get single country
GET	/api/questions/:slug	Get quiz questions
POST	/api/auth/register	Register account
POST	/api/auth/login	Login user
GET	/api/auth/me	Current user
POST	/api/progress	Save quiz progress
🎨 Design Style

Mila uses:

Warm editorial colors
Serif + modern typography
Smooth animations
Card-based layouts
Gradient culture cards
Instagram-inspired authentication pages
🔮 Future Improvements
Multiplayer quizzes
Global leaderboard
AI-generated cultural recommendations
Audio pronunciation guides
Dark mode
Admin dashboard
Cloud deployment
👨‍💻 Team Roles
Role	Responsibility
Frontend Developer	React UI, pages, styling
Backend Developer	Flask API, database
Content Researcher	Cultural lessons & quizzes
QA / Integration	Testing and deployment
📜 License

MIT License

Free to use, modify, and distribute.

🌍 Mila

"Every culture has a story worth discovering."