import TopBar from './component/topbar/NavBar'
import Home from './component/home/Home'
import Single from './component/single/Single'
import Write from './component/write/Write'
import Register from './component/register/Register'
import Login from './component/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'



function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/post/:postid' element={<Single/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
