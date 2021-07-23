import logo from './logo.svg';
import './App.css';
import Navbar from '@utils/components/navbar/navbar';
import Navigation from '@utils/routes/routes';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Navigation></Navigation>
    </>
  );
}

export default App;
