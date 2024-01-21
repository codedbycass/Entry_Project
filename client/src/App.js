import './App.css';
import Home from './pages/Home'
import Account from './pages/Account'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

export default function App() {
  return (
    <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
    </Router>
  );
}


