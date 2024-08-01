import logo from './logo.svg';
import './App.css';
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Login from './login';
import Profile from './profile';
import Register from './Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
