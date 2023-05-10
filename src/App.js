import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import People from './views/People';
import Planets from './views/Planets';
import HeaderForm from './components/HeaderForm';
import Error from './views/Error';

function App() {
  return (
    <div className="App">

      <HeaderForm/>
      
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/error" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
