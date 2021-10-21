import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Navbar/>
    </Router>
  )
}

export default App
