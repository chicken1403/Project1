#  [EliteCode](https://65c667661fffc0255fbcea4b--steady-platypus-d0a662.netlify.app/)

# React LeetCode Clone

## Description

This project is a clone of LeetCode built using React. It allows users to solve coding problems and test their solutions against provided test cases.

## Live Website Demonstration
1. Landing Page
![Screenshot 2024-06-27 094114](https://github.com/chicken1403/Project1/assets/165024679/ac731951-f596-4706-85db-2e8f1d13a88d)
2. Profile and Calender
![Screenshot 2024-06-27 094136](https://github.com/chicken1403/Project1/assets/165024679/264f2f24-c545-4629-9ece-4ebd46eb1391)
3. Problem Set Page
![Screenshot 2024-06-27 094155](https://github.com/chicken1403/Project1/assets/165024679/d6ffa407-43c1-4ee4-a07c-8e918c77e0b7)
4. Coding Area
![Screenshot 2024-06-27 094212](https://github.com/chicken1403/Project1/assets/165024679/00d99494-9001-4300-97d6-4e3d609fd601)


## React Concepts Used

### 1. Context API

The Context API is used for managing authentication state across components. `AuthProvider` wraps the entire application to provide authentication context.

```javascript
// AuthProvider.js
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // Authentication state management logic
};

export default AuthProvider;
```

### 2. Firebase Authentication

Firebase Authentication is used for user authentication. useAuthState hook is used to track authentication state.

```javascript
// CodeEditor.js
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

const [user] = useAuthState(auth);
```

### 3. React Router DOM

React Router DOM is used for routing within the application. Different routes are defined using Routes and Route components.

```javascript
/// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
```

### 4. Destructuring

Destructuring is used extensively to extract values from objects and arrays.

```javascript
// CodeEditor.js
const { examples, id, starterCode, handlerFunction } = Problem;
```

### 5. Dark/Light Mode using Daisy UI

Dark and Light mode functionality is implemented using Daisy UI components and CSS classes toggling.

```javascript
// ThemeToggle.js
import { useColorMode } from "daisyui";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
```

---

## Installation and Usage

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

## Credits

This project was built by Manas Kumar Sinha, Rahul Singh and Rishi Kawa as a part of Even Semester Project by coding Club IIT Guwahati. </br>
