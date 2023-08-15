import { Routes, Route } from 'react-router-dom';
import { router } from './configs/router';
import Homepage from './views/Home';
import Login from './views/Login';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={router.HOME} element={<Homepage />}/>
        <Route path={router.LOGIN} element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
