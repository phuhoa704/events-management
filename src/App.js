import { Routes, Route } from 'react-router-dom';
import { router } from './configs/router';
import Homepage from './views/Home';
import Login from './views/Login';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={router.HOME} element={<Homepage />} />
        <Route path={router.LOGIN} element={<Login />} />
        <Route path={router.DASHBOARD} element={<Dashboard />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
