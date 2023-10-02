import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [currentColorCode, setCurrentColorCode] = useState("#808000");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setCurrentColorCode(color);
  }, [color]);

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  const navbarStyles = {
    backgroundColor: isDarkMode ? "black" : "grey",
  };

  return (
    <div className={`full-height ${isDarkMode ? "dark-mode" : ""}`} style={{ background: color }}>
      <nav style={navbarStyles} className="px-4 py-2 flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">
          <strong>Color</strong>Board
        </h1>
        <button onClick={toggleDarkMode} className="text-white">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <div className="current-color">
        <div style={{ backgroundColor: color }} className="color-box"></div>
        <p className="color-code">{currentColorCode}</p>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* ... (Your color buttons remain unchanged) */}
        <button
          onClick={generateRandomColor}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          Random Color
        </button>
      </div>
    </div>
  );
}

export default App;
