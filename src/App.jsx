import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Randomgencom from './components/Randomgenerators-2/randomgen';
import Filteredcomp from './components/filteredproducts-3/filteredcomp';
import Calculator from './components/calculator-4/calculator';
import Todolist from './components/todolist-5/todolist';
import Clock from './components/clock-6/clock';
import Timer from './components/timer-8/timer';
import './App.css'; // For styling the main grid
import Expensetracker from './components/expensetracker-7/expensetracker';
import Addtocart from './components/addtocart-9/addtocart-9';
import Cart from './components/addtocart-9/cart';
import Viewmore from './components/addtocart-9/viewmore';
import Jsoncrud from './components/jsoncrud-10/jsoncrud';
import Weather from './components/weather-11/weather';
import Imdb from './components/movieimd-12/imdb';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <div className="main-container">
              <h1>🚀 Mini Task Dashboard</h1>
              <div className="grid-container">
                <Link to="/random" className="task-card">
                  <img src="https://miro.medium.com/v2/resize:fit:979/1*rIGF3XHLmmB8-z6TKLpgkQ.jpeg" alt="Random Generator" />
                  <p>Random Generator</p>
                </Link>
                <Link to="/filter" className="task-card">
                  <img src="https://imgix.cosmicjs.com/965025a0-f668-11ed-87b8-b7104fcd2121-unft-search-page-min.png?w=1200&auto=compress" alt="Filter" />
                  <p>Filtered Product</p>
                </Link>
                <Link to="/calculator" className="task-card">
                  <img src="https://images.pexels.com/photos/6927360/pexels-photo-6927360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Calculator" />
                  <p>Calculator</p>
                </Link>
                <Link to="/todo" className="task-card">
                  <img src="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Todo List" />
                  <p>Todo List</p>
                </Link>
                <Link to="/clock" className="task-card">
                  <img src="https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Clock" />
                  <p>Clock</p>
                </Link>
                <Link to="/expensetracker" className="task-card">
                  <img src="https://images.pexels.com/photos/4386335/pexels-photo-4386335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Expense Tracker" />
                  <p>Expense Tracker</p>
                </Link>
                <Link to="/timer" className="task-card">
                  <img src="https://images.pexels.com/photos/9944858/pexels-photo-9944858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Timer" />
                  <p>Timer</p>
                </Link>
                <Link to="/addtocart" className="task-card">
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/78/2f/0a/782f0a86-1907-2191-b511-bbcff47fbfa2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="add to cart" />
                  <p>Ecart</p>
                </Link>
                <Link to="/capucino" className="task-card">
                  <img src="https://www.waca.or.jp/en/wp-content/uploads/2021/02/cappuccino_03.jpeg" alt="capucino" />
                  <p>capucino</p>
                </Link>
                <Link to="/weather" className="task-card">
                  <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/8b934f7ddd08f5d149bdc2139728672f8898546c" alt="weather" />
                  <p>weather app</p>
                </Link>
                 <Link to="/imdb" className="task-card">
                  <img src="https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="imdb" />
                  <p>imdb</p>
                </Link>
              </div>
            </div>
          }
        />

        {/* Task Routes */}
        <Route path="/random" element={<Randomgencom />} />
        <Route path="/filter" element={<Filteredcomp />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/expensetracker"  element={<Expensetracker/>}/>
        <Route path="/timer" element={<Timer />} />
        <Route path="/addtocart" element={<Addtocart/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<Viewmore/>}/>
        <Route path="/capucino" element={<Jsoncrud/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/imdb" element={<Imdb/>}/>
      </Routes>
    </Router>
  );
}

export default App;
