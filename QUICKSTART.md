# 🚀 Quick Start Guide for MovieHub

## ⚡ Setup in 3 Minutes

### Step 1: Get Your TMDB API Key (2 minutes)

1. Visit https://www.themoviedb.org/signup
2. Create a free account
3. Go to Settings → API → Request API Key
4. Choose "Developer" and fill the form
5. Copy your API key

### Step 2: Configure the App (30 seconds)

1. Open the `.env` file in the project root
2. Replace `your_tmdb_api_key_here` with your actual API key:
    ```
    VITE_TMDB_API_KEY=abc123xyz456youractualkey
    ```
3. Save the file

### Step 3: Start the App (30 seconds)

```bash
npm run dev
```

That's it! Open http://localhost:5173 in your browser 🎉

## ✅ What's Already Set Up

✓ All dependencies installed (axios, react-router-dom)
✓ Tailwind CSS configured
✓ Project structure created
✓ All components built
✓ Routing configured
✓ State management ready
✓ API service configured

## 🎬 Features You Can Use Right Now

1. **Browse Movies** - Home page shows popular movies
2. **Search** - Type in the search bar to find movies
3. **Filter by Genre** - Select genres from the dropdown
4. **Sort Movies** - Sort by popularity, rating, or date
5. **Like Movies** - Click the heart icon on any movie
6. **View Details** - Click any movie to see full details
7. **Liked Collection** - View all your liked movies
8. **Learn More** - Check the About page

## 🔑 Important Notes

-   **API Key Required**: The app won't work without a valid TMDB API key in `.env`
-   **Restart Required**: After adding your API key, restart the dev server (Ctrl+C, then `npm run dev`)
-   **Free API**: TMDB API is completely free for personal/educational use
-   **Rate Limits**: Free tier has 40 requests per 10 seconds (more than enough)

## 🐛 Troubleshooting

**Movies not showing?**
→ Check that your API key is correctly set in `.env` file

**Changes not reflecting?**
→ Restart the dev server (Ctrl+C, then `npm run dev`)

**Port already in use?**
→ Vite will automatically use the next available port

## 📱 Testing on Mobile

1. On the same WiFi network
2. Run: `npm run dev -- --host`
3. Use the Network URL shown in terminal

## 🎨 Customization Ideas

-   Change the color scheme (purple/pink gradient)
-   Add more sorting options
-   Implement pagination
-   Add movie trailers
-   Create watchlists
-   Add dark/light mode toggle

## 📚 Learn More

-   [TMDB API Docs](https://developer.themoviedb.org/docs)
-   [React Router Docs](https://reactrouter.com/)
-   [Tailwind CSS Docs](https://tailwindcss.com/)

---

Need help? Check the main README.md for detailed documentation!
