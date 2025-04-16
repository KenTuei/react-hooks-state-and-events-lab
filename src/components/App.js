// App.js
import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Hello, world!</h1>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;
