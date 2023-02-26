import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar'
import MainRoute from './routes/MainRoute';
import SingleProduct from './pages/SingleProduct';
import SearchPage from './pages/SearchPage';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const location=useLocation()
  const { isLoggedIn,user } = useSelector((state) => state.auth);
  const email=user[0]?.email
  return (
   <>
   { !email?.includes("@productify.com") &&<Navbar></Navbar>}
   <MainRoute/>
   </>
  );
}

export default App;
