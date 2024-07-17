import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
     </Routes>
     <Toaster />
     <Footer/>
    </>
  );
}

export default App;