import logo from './logo.svg';
import './App.css';
import Navbar from '@utils/components/navbar/navbar';
import Routes from '@utils/routes/routes';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes></Routes>
    </>
  );
}

export default App;
