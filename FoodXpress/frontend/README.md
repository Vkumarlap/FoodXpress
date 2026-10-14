# Masala Lane – food ordering home page (React + Vite)

Home page with a Swiggy/Zomato-style Login and Register side panel.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

Requires Node.js 18 or newer.

## Structure

```
index.html
package.json
vite.config.js
src/
  main.jsx               entry point
  App.jsx                page state: which panel is open, who is logged in
  data.js                cuisines and restaurants (sample data)
  styles.css             all styling, with light/dark theme tokens
  components/
    Navbar.jsx           brand, Login / Register buttons
    Hero.jsx             headline and search bar
    Bowl.jsx             SVG food bowl
    Cuisines.jsx         "What's on your mind?" row
    Restaurants.jsx      restaurant cards
    AuthDrawer.jsx       slide-in panel (Esc / click outside closes)
    LoginForm.jsx        login page
    RegisterForm.jsx     register page
    Field.jsx            input with error and show/hide password
```

## Connecting a backend

`LoginForm.jsx` and `RegisterForm.jsx` each have a `TODO` where the
`fetch('/api/login')` / `fetch('/api/register')` call belongs. Right now they
only validate and then pretend to sign in.
