# ♟️ DigiChess

DigiChess is a modern online chess platform that combines competitive gameplay, AI opponents, player profiles, leaderboards, statistics tracking, and social features in a clean, professional interface.

## Features

### 🎮 Play Chess Your Way

* Local Player vs Player matches
* Online Multiplayer matchmaking
* Ranked and Unranked game modes
* Friend Code matches
* Real-time move synchronization

### 🤖 Play Against AI

* Powered by Stockfish
* Multiple difficulty levels
* Beginner to Expert opponents
* Instant AI move generation

### 🏆 Ranked Elo System

* Starting Elo: 400
* Ranked matchmaking
* Elo gain and loss after ranked games
* Global leaderboard rankings
* Competitive progression system

### 📊 Statistics Tracking

Track your performance with:

* Total games played
* Wins, losses, and draws
* Win percentage
* Current Elo rating
* Ranked record
* Checkmate victories
* Timeout victories
* Resignation victories

### 👥 Social Features

* User accounts
* Guest mode
* Friends system
* Private messaging
* Online status indicators
* Player profiles

### 📈 Leaderboards

Compete against other players in:

* Highest Elo
* Most Wins
* Best Win Rate
* Other performance categories

### ⏱️ Chess Features

* Adjustable time controls
* Move history tracking
* Legal move highlighting
* Check and checkmate detection
* Castling
* En Passant
* Pawn promotion
* Stalemate detection

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend & Database

* Firebase Authentication
* Firebase Realtime Database

### Chess Engine

* Stockfish

### Hosting

* GitHub Pages / Firebase Hosting

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/digichess.git
```

### Open the Project

```bash
cd digichess
```

### Configure Firebase

Create a Firebase project and replace the Firebase configuration values inside the project files.

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Run Locally

Open the project using a local development server such as VS Code Live Server.

---

## Project Structure

```text
DigiChess/
│
├── index.html
├── style.css
├── script.js
├── database.rules.json
│
├── assets/
│   ├── images/
│   ├── sounds/
│   └── icons/
│
└── README.md
```

---

## Future Improvements

* Daily Chess Puzzles
* Game Analysis & Accuracy Scores
* Opening Explorer
* Achievement System
* Spectator Mode
* Tournament System
* Profile Customisation
* Mobile App Version

---

## Educational Purpose

DigiChess was developed to demonstrate:

* Web Development
* Real-Time Multiplayer Systems
* Database Integration
* User Authentication
* UI/UX Design
* Game Logic Development
* Chess Engine Integration

---

## License

This project is available for educational and learning purposes. Feel free to fork, study, and build upon the project.
