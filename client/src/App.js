import './App.css';
import Home from './pages/Home'
import Account from './pages/Account'
import SignIn from './pages/SignIn'
import CreateAccount from './pages/CreateAccount'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react" 
import Navbar from "./components/Navbar"


export default function App() {
  // this will be passed as props into the navbar component
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated')
      if (storedAuthState) {
        setIsAuthenticated(storedAuthState === 'true')
      } else {
        fetch('http://localhost:8000/api/login', {
          method: "GET",
          credentials: "include"
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Authentication data:", data)
            setIsAuthenticated(data.isAuthenticated)
            localStorage.setItem('isAuthenticated', data.isAuthenticated)
          })
          .catch((error) => {
            console.error("Error checking authentication status: error", error)
          })
      }}, [])
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      {/* <Navbar/> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<CreateAccount />} />
        </Routes>
    </Router>
  );
}


