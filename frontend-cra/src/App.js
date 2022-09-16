import "./App.css";
import axios from "axios";

// set URL to backend just once!
// load it from .env file
const API_URL = process.env.REACT_APP_API_URL;
console.log({ API_URL })

// set Backend URL for axios just ONCE!
// now this url will be used for all my requests!
axios.defaults.baseURL = API_URL;

function App() {
  // fetch vs axios ???
  const fetchData = async () => {

    // http://localhost:5000/animals
    const resp = await axios.get(`/animals`);    
    console.log(resp.data);

    // POST request with axios
    // axios.post("/posts", { email: "myemail@net.com" });

    // the same with fetch => much more work! and more potential errors!
    // fetch(`${API_URL}/posts`,{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ email: "myemail@net.com" })
    // })
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
