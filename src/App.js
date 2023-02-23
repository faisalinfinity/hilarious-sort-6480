import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainRoute from './routes/MainRoute';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
   <>
   <Navbar></Navbar>
   <MainRoute/>
   </>
  );
}

export default App;
