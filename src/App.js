import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import User from './component/user';
import Cart from './component/cart';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/cart'>Cart</Link></button>
      <button><Link to='/user'>User</Link></button>
    </div>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/cart' Component={Cart}/>
      <Route path='/user' Component={User}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
