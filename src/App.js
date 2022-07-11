import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <a
          href="https://github.com/RafaelaEllensburg/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Rafaela Ellensburg
      </p>
    </div>
  );
}

export default App;
