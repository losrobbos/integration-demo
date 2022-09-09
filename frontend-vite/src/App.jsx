import './App.css'
import axios from 'axios'

// set URL to backend just once!
// load it from .env file
// axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {

  // fetch vs axios ???
  const fetchData = async () => {

    // const resp = await axios.get(`${API_URL}/todos`);
    // console.log(resp.data);

    const resp = await axios.post(`/todos`, 
      { email: "rob@rob.com", password: "hey123" }
    );
    console.log(resp.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>Fetch Data</button>
      </header>
    </div>
  )
}

export default App
