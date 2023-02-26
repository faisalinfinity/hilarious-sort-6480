import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Navbar from './pages/Navbar'
import MainRoute from './routes/MainRoute';
import SingleProduct from './pages/SingleProduct';
import SearchPage from './pages/SearchPage';

function App() {
  return (
   <>
  <Navbar/>
   <MainRoute/>
  
   </>
  );
}

export default App;
