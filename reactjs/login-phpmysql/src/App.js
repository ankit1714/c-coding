import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home';
import Login from './login';
import Register from './register';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='container'>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>

    </div>
    </Router>
  );
}

export default App;
