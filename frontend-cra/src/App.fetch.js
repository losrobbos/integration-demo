import "./App.css";

// set URL to backend just once!
// load it from .env file

const API_URL = process.env.REACT_APP_API_URL;
console.log({ API_URL })

function App() {
  // fetch vs axios ???
  const fetchData = async () => {

    const resp = await fetch(`${API_URL}/animals`);
    const animals = await resp.json()
    console.log(animals)
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>Fetch Data</button>
      </header>
    </div>
  );
}

export default App;
