import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar'
import MainRoute from './routes/MainRoute';
import SingleProduct from './pages/SingleProduct';
import SearchPage from './pages/SearchPage';
import { useLocation } from 'react-router-dom';

function App() {
  const location=useLocation()
  return (
   <>
   {location.pathname!=="/admin" && <Navbar></Navbar>}
   <MainRoute/>
   </>
  );
}

export default App;
