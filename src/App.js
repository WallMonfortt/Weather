import './App.css';
import Weather from "./components/Weather"

function App() {

  if(!"geolocation" in navigator) return <div className="noSup">"Geolocation is not supported by your browser"</div>;

  return (
    <div className="App">
     <Weather />
    </div>
  );
}

export default App;
