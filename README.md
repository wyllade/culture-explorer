# 🌍 Mila — World's Living Cultures

> An interactive cultural learning platform that lets you explore traditions, history, food, arts, and folklore from across the globe — with quizzes, progress tracking, and badges.

---

## What is Mila?

Mila is a single-page web application built with vanilla HTML, CSS, and JavaScript. It requires no build tools, no frameworks, and no server — just open `index.html` in a browser and it works instantly.

The platform currently covers **15 cultures** with **20 quiz questions each**, topic lessons, progress tracking, and a full user account system stored locally.

---

## Pages

| Page | Description |
|---|---|
| **Home** | Hero section, feature overview, culture cards, testimonials |
| **Explore** | Searchable and filterable grid of all 15 cultures |
| **Country Detail** | Tabbed topic lessons per culture (full content for Japan) |
| **Quiz** | 10-question adaptive quiz drawn from 20 questions per country |
| **Dashboard** | Personal progress, quiz history, XP, streaks, badges |
| **Login / Register** | Demo auth saved to localStorage |

---

## Cultures Covered

| Culture | Region | Questions |
|---|---|---|
| Japan | Asia-Pacific | 20 |
| India | Asia-Pacific | 20 |
| China | Asia-Pacific | 20 |
| South Korea | Asia-Pacific | 20 |
| Morocco | Africa | 20 |
| Kenya | Africa | 20 |
| Egypt | Africa | 20 |
| Algeria | Africa | 20 |
| France | Europe | 20 |
| Greece | Europe | 20 |
| Italy | Europe | 20 |
| Spain | Europe | 20 |
| Mexico | Americas | 20 |
| Brazil | Americas | 20 |
| Turkey | Middle East | 20 |

---

## Features

### Learning
- **Topic lessons** with rich written content covering history, arts, food, folklore, and language
- **Mark as read** to track which topics you have completed
- **+5 XP** earned for every topic read

### Quizzes
- **20 questions per country** stored in `ALL_QUIZ_QUESTIONS`
- Each quiz session randomly draws **10 questions** from the pool
- Three difficulty levels: Beginner, Explorer, Scholar
- Instant feedback with explanation after every answer
- XP earned per correct answer

### Progress & Gamification
- Personal **XP total** accumulates across all quizzes and topics
- **Day streak** counter tracks consistent learning
- **Badges** awarded for milestones (First Quiz, Perfect Score)
- Per-country progress percentage shown on every card
- Full quiz attempt history on the dashboard

### Auth
- Demo register and login — no backend required
- All data persisted in `localStorage` under the keys `cq_user`, `cq_progress`, `cq_attempts`
- Signing out clears the session but preserves progress for when you sign back in

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 with custom properties (design tokens) |
| Logic | Vanilla JavaScript (ES2020) |
| Icons | Inline SVG symbol sprites — no external icon library |
| Fonts | Google Fonts — Fraunces (display) + Outfit (body) |
| Storage | Browser localStorage |
| Build | None — zero dependencies, zero config |

---

## Project Structure

```
mila/
│
├── index.html        ← Entire app (HTML + CSS + JS in one file)
│
└── README.md         ← This file
```

The entire application lives in a single `index.html` file, organised into clear sections:

```
index.html
├── <style>           CSS design system and all page styles
├── <svg>             Reusable SVG icon sprite definitions
├── Navbar            Sticky navigation with mobile hamburger
├── #page-home        Landing page
├── #page-explore     Culture grid with search and filter
├── #page-country     Country detail with tabbed topics
├── #page-quiz        Quiz engine (start → questions → results)
├── #page-dashboard   User progress and badges
├── #page-login       Sign in form
├── #page-register    Create account form
├── <footer>          Site footer with links
└── <script>          All data, state, and application logic
```

---

## Design System

The UI uses a warm, editorial aesthetic inspired by travel guides and cultural magazines.

### Colour Tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#1a1208` | Primary text, dark backgrounds |
| `--cream` | `#fdf8f0` | Page background |
| `--saffron` | `#f5a623` | Primary CTA, highlights |
| `--cobalt` | `#1b4fa8` | Secondary accent, links |
| `--jade` | `#1a7a5a` | Progress bars, success |
| `--coral` | `#e84c2b` | Errors, accents |
| `--violet` | `#6b3fa0` | Badges, tags |
| `--rose` | `#c23773` | Badges, tags |

### Typography
- **Fraunces** — Display headings, serif, expressive
- **Outfit** — Body text, UI elements, clean and readable

---

## How to Run

**Option 1 — Open directly:**
```
Double-click index.html
```

**Option 2 — VS Code Live Server:**
1. Install the Live Server extension in VS Code
2. Right-click `index.html` → Open with Live Server
3. Opens at `http://localhost:5500`

**Option 3 — Any local server:**
```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

> ⚠️ **Note:** Do not open `index.html` with the file:// protocol if you plan to connect a Flask backend — use a local server instead.

---

## Connecting the Flask Backend

This frontend is designed to work alongside a Flask REST API. To enable live data:

1. Start the Flask backend:
```bash
cd backend
pip install -r requirements.txt
python seed.py
python app.py
```

2. Create a `.env` file or update the base URL in `index.html`:
```javascript
const API_BASE = 'http://localhost:5000/api';
```

3. The frontend will automatically fetch countries, topics, and quiz questions from the API and fall back to local demo data if the server is offline.

### API Endpoints Expected

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/content/countries` | List all countries |
| `GET` | `/api/content/countries/:slug` | Single country with topics |
| `GET` | `/api/content/countries/:slug/questions` | Quiz questions |
| `POST` | `/api/auth/register` | Create account |
| `POST` | `/api/auth/login` | Sign in |
| `GET` | `/api/auth/me` | Current user profile |
| `POST` | `/api/progress/:slug/quiz` | Submit quiz results |
| `GET` | `/api/progress/` | Get all user progress |

---

## Adding a New Country

1. Add an entry to the `COUNTRIES` array in the `<script>` section:
```javascript
{
  slug: "japan",
  name: "Japan",
  region: "asia",
  desc: "Short description shown on the card.",
  grad: "linear-gradient(145deg, #f7c35f, #e84c2b)",
  tags: ["History", "Arts"],
  topics: 6,
  questions: 20,
  icon: "ic-history"
}
```

2. Add 20 quiz questions to `ALL_QUIZ_QUESTIONS`:
```javascript
ALL_QUIZ_QUESTIONS.newcountry = [
  {
    q: "Question text?",
    opts: ["Option A", "Option B", "Option C", "Option D"],
    ans: 0,          // index of correct answer
    cat: "History",
    xp: 10,
    exp: "Explanation shown after answering."
  },
  // ... 19 more
];
```

3. Optionally add topic content following the `JAPAN_TOPICS` pattern.

---

## Roadmap

- [ ] Connect fully to Flask REST API
- [ ] Add topic content for all 15 countries
- [ ] Leaderboard page
- [ ] Daily challenge / streak reminders
- [ ] More countries (target: 40+)
- [ ] Audio pronunciation guides
- [ ] User-generated content submissions
- [ ] PWA / offline support

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-country`
3. Add your content or fix
4. Commit: `git commit -m "Add Nigeria culture content"`
5. Push and open a Pull Request

---

## License

MIT — free to use, modify, and distribute.

---

*Built with curiosity. Every culture has a story worth knowing.*