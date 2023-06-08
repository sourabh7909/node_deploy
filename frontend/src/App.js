
import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import Notes from './components/Notes';
import Allnotes from './components/Allnotes';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <h1>Notes Takin Application</h1>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/notes' element={<Notes/>}></Route>
        <Route path='/allnotes' element={<Allnotes/>}></Route>
        <Route path='/update/:userID' element={<Update/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
