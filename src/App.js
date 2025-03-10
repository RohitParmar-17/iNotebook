import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [alert , setAlert] = useState(null);
  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div>
     {/* <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}> */}
      <NoteState>
      <Navbar/>
      <Alert alert={alert} />
      <div className="container">
      <Routes>
        <Route exact path = "/" element={<Home showAlert={showAlert} />}></Route>
        <Route exact path = "/login" element={<Login showAlert={showAlert}/>}></Route>
        <Route exact path = "/signup" element={<Signup showAlert={showAlert}/>}></Route>
        <Route exact path = "/about" element={<About/>}></Route>
      </Routes>
      </div>
    </NoteState>
    </div>
  );
}

export default App;
