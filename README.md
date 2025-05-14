🎬 Netflix Clone
A fully responsive Netflix-style streaming web app built with React.js, Tailwind CSS, and Firebase Authentication. Movie data is dynamically fetched using Fetch API from The Movie Database (TMDB).

🧰 Tech Stack
React.js – Component-based frontend library

Tailwind CSS – Utility-first CSS for rapid UI development

Firebase Auth – Secure user login system

Fetch API + Async/Await – For fetching movie data

React Router – Page routing and protected routes

TMDB API – Provides dynamic movie content

🚀 Features
✅ Firebase email/password login

✅ Protected home route for authenticated users

✅ Dynamic banners & movie rows (Fetched from TMDB)

✅ Sections: Trending, Top Rated, Originals, etc.

✅ Responsive and mobile-friendly layout

✅ Reusable UI components (Navbar, Row, Banner, etc.)

✅ Clean project structure & code



Live Preview:https://moviegptype.netlify.app/

🧾 TMDB API Setup
Go to https://www.themoviedb.org/

Create an account & generate an API key

Create a file named .env and add your API key:


REACT_APP_TMDB_API_KEY=your_api_key_here
Example Fetch usage in your code:

js
Copy
Edit
const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );
  const data = await response.json();
  setMovies(data.results);
};
🔐 Firebase Auth Setup
Visit Firebase Console

Create a new project

Enable Email/Password under Authentication > Sign-in method

Copy your Firebase config and use it in firebaseConfig.js

js
Copy
Edit
// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

⚙️ Installation
bash
Copy
Edit
git clone 
cd netflix-clone
npm install
npm start
✅ What You’ll Learn
Using Firebase Auth with React

Handling real API requests using fetch and useEffect

Managing environment variables securely

Reusable component design in React

Responsive design using Tailwind CSS
