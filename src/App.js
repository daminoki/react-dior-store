import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="containter">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
