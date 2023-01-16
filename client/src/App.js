import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';

import './App.css';


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Signup />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
