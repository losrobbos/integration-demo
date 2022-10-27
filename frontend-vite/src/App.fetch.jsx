import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const fetchData = async () => {
    const API_URL = import.meta.env.VITE_API_URL;
    console.log({ API_URL })
    
    const resp = await fetch(`${API_URL}/animals`);
    const data = await resp.json()
    console.log(data)
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
