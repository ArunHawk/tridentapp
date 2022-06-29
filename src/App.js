import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/Product';
import Login from './components/login/Login';
import Refer from './components/refer/Refer';
import Read from './components/Crud/Read';
import Update from './components/Crud/Update';
import Customer from './components/Crud/Customer';
import Register from './components/login/Register';
import How from './components/how/How';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/login" element={<Login/>}/>
      <Route path='/refer' element={<Refer/>} />
      <Route path='/read' element={<Read/>} />
      <Route path='/update' element={<Update/>} />
      <Route path='/customer' element={<Customer/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/howit' element={<How/>}/>
    </Routes>
    </Router>
  );
}

export default App;
