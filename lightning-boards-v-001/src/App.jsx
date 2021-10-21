import { useState } from 'react'
import './App.css'
import Navbar from './contents/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './contents/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Navbar/>
     <div style={{paddingTop: '50px'}}>
     <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
       <Route exact path="/menu1">
        <div style={{backgroundColor:'#cccccc', height: '100vh'}}></div>
       </Route>
       <Route exact path="/menu2">
        <div style={{backgroundColor:'#cccccc', height: '100vh'}}></div>
       </Route>
       <Route exact path="/menu3">
        <div style={{backgroundColor:'#cccccc', height: '100vh'}}></div>
       </Route>
     </Switch>
     </div>
    </Router>
  )
}

export default App
