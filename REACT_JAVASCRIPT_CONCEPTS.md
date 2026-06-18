# React & JavaScript Concepts Explained - Beginner Guide

This document explains all the React and JavaScript concepts used in your MovieDux project in simple, beginner-friendly terms.

---

## 📦 **1. IMPORTS AND EXPORTS**

### What it is:
Imports let you use code from other files. Exports let you share your code with other files.

### In your code:
```javascript
// Exporting (making available to other files)
export default function Header() { ... }

// Importing (using code from other files)
import Header from './Components/Header';
import { useState, useEffect } from 'react';
```

### Simple explanation:
- **`export default`**: "Hey, this is the main thing I want to share from this file"
- **`import`**: "I want to use that code from another file"
- **Named imports** (with curly braces `{}`): When you import specific things like `{ useState }`
- **Default imports** (without curly braces): When you import the main export like `import Header`

---

## ⚛️ **2. REACT COMPONENTS**

### What it is:
Components are like building blocks for your app. Each component is a reusable piece of UI (User Interface).

### In your code:
```javascript
function App() {
  return <div>...</div>;
}

export default function MovieCard({ movie }) {
  return <div>...</div>;
}
```

### Simple explanation:
- Think of components like LEGO blocks
- Each component can be used multiple times
- Components return JSX (which looks like HTML but is JavaScript)
- **Functional Components**: Components written as functions (like yours)

---

## 🎨 **3. JSX (JavaScript XML)**

### What it is:
JSX lets you write HTML-like code inside JavaScript.

### In your code:
```javascript
return (
  <div className="movie-card">
    <h3>{movie.title}</h3>
    <img src={`images/${movie.image}`} alt={movie.title} />
  </div>
);
```

### Simple explanation:
- JSX looks like HTML but it's actually JavaScript
- You can use JavaScript inside JSX with curly braces `{}`
- **Important rules**:
  - Use `className` instead of `class` (because `class` is a JavaScript keyword)
  - Always close tags: `<img />` not `<img>`
  - Use curly braces `{}` to insert JavaScript: `{movie.title}`

---

## 📤 **4. PROPS (Properties)**

### What it is:
Props are like arguments you pass to components. They let you send data from parent to child components.

### In your code:
```javascript
// Parent component passing props
<MovieCard 
  movie={movie} 
  toggleWatchlist={toggleWatchlist} 
  isWatchListed={true} 
/>

// Child component receiving props
export default function MovieCard({ movie, toggleWatchlist, isWatchListed }) {
  // Use the props here
}
```

### Simple explanation:
- Props are like passing a note to a friend
- Parent component (App) gives data to child component (MovieCard)
- You receive props in the function parameters
- Props are **read-only** - you can't change them inside the component

---

## 🔄 **5. STATE (useState Hook)**

### What it is:
State is data that can change over time. When state changes, React automatically updates what you see on screen.

### In your code:
```javascript
const [movies, setMovies] = useState([]);
const [watchlist, setWatchlist] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
```

### Simple explanation:
- **`useState`**: A React hook that lets you add state to your component
- **Array destructuring**: `[movies, setMovies]` means:
  - `movies` = the current value
  - `setMovies` = function to update the value
- **Initial value**: `useState([])` means start with an empty array
- When you call `setMovies(newValue)`, React re-renders the component with the new data

### Example:
```javascript
// Start with empty array
const [watchlist, setWatchlist] = useState([]);

// Later, update it
setWatchlist([1, 2, 3]); // Now watchlist = [1, 2, 3]
```

---

## ⚡ **6. useEffect HOOK**

### What it is:
`useEffect` lets you do things after your component renders (like fetching data, setting up timers, etc.).

### In your code:
```javascript
useEffect(() => {
  fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data));
}, []);
```

### Simple explanation:
- Runs code **after** the component renders
- **Empty array `[]`**: Means "run only once when component first loads"
- **With values `[movies]`**: Means "run whenever `movies` changes"
- Perfect for fetching data when the page loads

---

## 🎯 **7. EVENT HANDLERS**

### What it is:
Functions that run when something happens (like clicking a button, typing in an input, etc.).

### In your code:
```javascript
const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};

// Used in JSX
<input onChange={handleSearchChange} />
```

### Simple explanation:
- **`e`** or **`event`**: Information about what happened
- **`e.target.value`**: The value of the input field
- **`onChange`**: Event that fires when input changes
- **`onClick`**: Event that fires when something is clicked
- **`onError`**: Event that fires when something goes wrong (like image fails to load)

---

## 🔍 **8. ARRAY METHODS**

### **8a. .map() - Transform each item**

### What it is:
Creates a new array by transforming each item in the original array.

### In your code:
```javascript
watchlist.map(id => {
  const movie = movies.find(movie => movie.id === id);
  return <MovieCard key={id} movie={movie} />;
})
```

### Simple explanation:
- Takes each item, does something with it, returns a new array
- Like a factory: takes raw materials (array items), processes them (transforms), outputs products (new array)
- Perfect for rendering lists of components

### Example:
```javascript
[1, 2, 3].map(num => num * 2)  // Returns [2, 4, 6]
```

---

### **8b. .filter() - Keep only matching items**

### What it is:
Creates a new array with only items that pass a test.

### In your code:
```javascript
const filteredMovies = movies.filter(movie => 
  filteredByGenre(movie, genreFilter) && 
  filteredbySearchTerm(movie, searchTerm)
);
```

### Simple explanation:
- Goes through each item, keeps it if condition is true, removes it if false
- Like a sieve: only lets through what matches
- Returns a new array (doesn't change the original)

### Example:
```javascript
[1, 2, 3, 4, 5].filter(num => num > 3)  // Returns [4, 5]
```

---

### **8c. .find() - Find first matching item**

### What it is:
Returns the first item that matches a condition.

### In your code:
```javascript
const movie = movies.find(movie => movie.id === id);
```

### Simple explanation:
- Looks through array, returns first match
- Returns `undefined` if nothing found
- Stops searching after finding first match

### Example:
```javascript
[1, 2, 3, 4].find(num => num > 2)  // Returns 3
```

---

### **8d. .includes() - Check if array contains item**

### What it is:
Checks if an array contains a specific value.

### In your code:
```javascript
if(prevWatchlist.includes(movieID)) {
  // Movie is already in watchlist
}
```

### Simple explanation:
- Returns `true` if item exists, `false` if not
- Like checking if someone's name is on a guest list

### Example:
```javascript
[1, 2, 3].includes(2)  // Returns true
[1, 2, 3].includes(5)  // Returns false
```

---

## 🎁 **9. DESTRUCTURING**

### What it is:
A way to extract values from objects or arrays into variables.

### In your code:
```javascript
// Object destructuring
export default function MovieCard({ movie, toggleWatchlist, isWatchListed }) {
  // Now you can use movie, toggleWatchlist, isWatchListed directly
}

// Array destructuring
const [movies, setMovies] = useState([]);
```

### Simple explanation:
- **Object destructuring**: Instead of `props.movie`, you can just use `movie`
- **Array destructuring**: Instead of `state[0]`, you can use the first variable name
- Makes code cleaner and easier to read

### Example:
```javascript
// Without destructuring
const movie = props.movie;
const title = props.title;

// With destructuring
const { movie, title } = props;
```

---

## 📡 **10. FETCH API & PROMISES**

### What it is:
`fetch` is used to get data from a server or file. It returns a Promise (something that will happen in the future).

### In your code:
```javascript
fetch("movies.json")
  .then(response => response.json())
  .then(data => setMovies(data));
```

### Simple explanation:
- **Promise**: "I'll get this data for you, but it might take a moment"
- **`.then()`**: "When the promise finishes, do this next"
- **`response.json()`**: Converts the response into JavaScript data
- Like ordering food: you place order (fetch), wait (.then), then receive food (data)

### Step by step:
1. `fetch("movies.json")` - Start getting the file
2. `.then(response => response.json())` - Convert to JavaScript
3. `.then(data => setMovies(data))` - Save the data to state

---

## 🔀 **11. SPREAD OPERATOR (...)**

### What it is:
The `...` operator spreads out array or object items.

### In your code:
```javascript
return [...prevWatchlist, movieID];
```

### Simple explanation:
- Takes all items from an array and puts them in a new array
- Like copying all items from one box to another, then adding a new item
- Creates a **new array** (doesn't change the original)

### Example:
```javascript
const old = [1, 2, 3];
const new = [...old, 4];  // [1, 2, 3, 4]
```

---

## 🎚️ **12. TERNARY OPERATOR (Conditional)**

### What it is:
A short way to write if/else statements.

### In your code:
```javascript
<span className="slider-label">
  {isWatchListed ? "InWatchlist" : "Add to WatchList"}
</span>
```

### Simple explanation:
- **Format**: `condition ? valueIfTrue : valueIfFalse`
- Like asking: "Is it true? If yes, use this. If no, use that."

### Example:
```javascript
const message = age >= 18 ? "Adult" : "Minor";
// If age >= 18, message = "Adult", else message = "Minor"
```

---

## 🔀 **13. TEMPLATE LITERALS**

### What it is:
A way to create strings with variables inside using backticks.

### In your code:
```javascript
<img src={`images/${movie.image}`} alt={movie.title} />
```

### Simple explanation:
- Use backticks `` ` `` instead of quotes
- Use `${variable}` to insert variables
- Makes string building easier

### Example:
```javascript
// Old way
const greeting = "Hello, " + name + "!";

// New way (template literal)
const greeting = `Hello, ${name}!`;
```

---

## 🔄 **14. CALLBACK FUNCTIONS**

### What it is:
A function passed as an argument to another function, to be called later.

### In your code:
```javascript
setWatchlist(prevWatchlist => {
  // This function runs later
  if(prevWatchlist.includes(movieID)) {
    return prevWatchlist.filter(id => id !== movieID);
  }
  return [...prevWatchlist, movieID];
});
```

### Simple explanation:
- A function you give to another function
- It gets called later (hence "callback")
- `prevWatchlist => {...}` is an arrow function used as a callback

### Example:
```javascript
// Callback function
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
```

---

## 🎯 **15. ARROW FUNCTIONS**

### What it is:
A shorter way to write functions.

### In your code:
```javascript
const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};

// Even shorter (one line)
const filteredMovies = movies.filter(movie => 
  filteredByGenre(movie, genreFilter)
);
```

### Simple explanation:
- **Old way**: `function name() { }`
- **New way**: `const name = () => { }`
- If only one parameter, you can skip parentheses: `e => { }`
- If only one line, you can skip curly braces: `x => x * 2`

### Example:
```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
}

// Even shorter (one line)
const add = (a, b) => a + b;
```

---

## 🔀 **16. SWITCH STATEMENTS**

### What it is:
A way to check multiple conditions (like multiple if/else statements).

### In your code:
```javascript
const filteredbyRating = (movie, ratingFilter) => {
  switch(ratingFilter) {
    case "Good":
      return movie.rating >= 8;
    case "Ok":
      return movie.rating >= 6 && movie.rating < 8;
    case "Bad":
      return movie.rating < 6;
    case "All":
      return true;
    default:
      return false;
  }
}
```

### Simple explanation:
- Checks the value of a variable
- Each `case` is like an `if` statement
- `default` runs if no case matches
- Like a menu: "If they order pizza, do this. If they order burger, do that."

---

## 🔗 **17. REACT ROUTER**

### What it is:
Lets you create different "pages" in your app without reloading.

### In your code:
```javascript
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

<Router>
  <Link to="/">Home</Link>
  <Link to="/watchlist">Watchlist</Link>
  
  <Routes>
    <Route path="/" element={<MoviesGrid ... />} />
    <Route path="/watchlist" element={<Watchlist ... />} />
  </Routes>
</Router>
```

### Simple explanation:
- **`Router`**: Wraps your app to enable routing
- **`Link`**: Like `<a>` tag but doesn't reload the page
- **`Routes`**: Container for all your routes
- **`Route`**: Defines what component shows for each URL path
- Like different rooms in a house - each URL is a different room

---

## 🔑 **18. KEYS IN LISTS**

### What it is:
A special prop React needs when rendering lists.

### In your code:
```javascript
filteredMovies.map(movie => (
  <MovieCard key={movie.id} movie={movie} />
))
```

### Simple explanation:
- React needs a unique `key` for each item in a list
- Helps React know which items changed, were added, or removed
- Should be unique and stable (like an ID)
- **Never use array index as key** if items can be reordered

---

## 🎨 **19. CONDITIONAL RENDERING**

### What it is:
Showing different things based on conditions.

### In your code:
```javascript
// Using ternary operator
{isWatchListed ? "InWatchlist" : "Add to WatchList"}

// Using && operator (if true, show it)
{watchlist.length > 0 && <div>You have items!</div>}
```

### Simple explanation:
- **Ternary**: `condition ? showThis : showThat`
- **&&**: `condition && showThis` (only shows if condition is true)
- Like showing different signs based on the weather

---

## 📅 **20. DATE OBJECT**

### What it is:
JavaScript object for working with dates and times.

### In your code:
```javascript
const currentYear = new Date().getFullYear();
```

### Simple explanation:
- `new Date()` creates a date object with current date/time
- `.getFullYear()` gets just the year (like 2024)
- `.getMonth()`, `.getDate()`, etc. get other parts

---

## 🔤 **21. STRING METHODS**

### What it is:
Built-in functions for working with text.

### In your code:
```javascript
movie.title.toLowerCase().includes(searchTerm.toLowerCase())
movie.genre.toLowerCase().includes(genreFilter.toLowerCase())
```

### Simple explanation:
- **`.toLowerCase()`**: Converts text to lowercase ("HELLO" → "hello")
- **`.includes()`**: Checks if text contains another text
- Useful for case-insensitive searches

---

## 🎯 **22. LOGICAL OPERATORS**

### What it is:
Operators that combine conditions.

### In your code:
```javascript
// && (AND) - both must be true
filteredByGenre(movie, genreFilter) && 
filteredbySearchTerm(movie, searchTerm) && 
filteredbyRating(movie, ratingFilter)

// || (OR) - either can be true
// ! (NOT) - reverses true/false
```

### Simple explanation:
- **`&&`**: Both conditions must be true
- **`||`**: Either condition can be true
- **`!`**: Reverses true to false, false to true

---

## 📝 **SUMMARY - How Your App Works**

1. **App.js** is the main component that:
   - Manages state (movies, watchlist)
   - Fetches movie data when page loads (useEffect)
   - Sets up routing (React Router)
   - Passes data to child components (props)

2. **MoviesGrid** component:
   - Shows all movies
   - Has search and filter functionality
   - Uses state for search term and filters
   - Filters movies based on user input

3. **MovieCard** component:
   - Displays one movie
   - Has a toggle to add/remove from watchlist
   - Handles image errors

4. **Watchlist** component:
   - Shows only movies in watchlist
   - Uses `.map()` and `.find()` to get movie details

5. **Header & Footer**:
   - Simple presentational components
   - Just display content

---

## 🎓 **Key Takeaways for Beginners**

1. **Components** = Reusable UI pieces
2. **Props** = Data passed from parent to child
3. **State** = Data that can change (triggers re-render)
4. **Hooks** = Special functions (useState, useEffect) that add features
5. **JSX** = HTML-like syntax in JavaScript
6. **Array methods** = Tools to work with lists (map, filter, find)
7. **Event handlers** = Functions that run when something happens

---

## 💡 **Practice Tips**

1. Try changing state values and see what happens
2. Add console.log() to see data flow
3. Experiment with different array methods
4. Create your own simple components
5. Practice passing props between components

Happy coding! 🚀
