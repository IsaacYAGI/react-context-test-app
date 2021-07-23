import logo from './logo.svg';
import './App.css';
import Navbar from '@utils/components/navbar/navbar';
import Routes from '@utils/routes/routes';
import { UserProvider } from '@contexts/UserContext/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Navbar></Navbar>
      <Routes></Routes>
    </UserProvider>
    </>
  );
}

export default App;
