import Header from './components/Header/Header.jsx'
import { useAuth } from './hooks/useAuth'
import './index.css'
import Home from './pages/Home.js';
import {Routes,Route,Navigate} from 'react-router-dom'
import Main from './pages/Main.js';
import Auth from './pages/Auth.js'
import { useSelector } from 'react-redux';
import Profile from './pages/Profile'
import Create from './pages/Create';
import { useLocalSt } from './hooks/useLocalSt.js';
import Module from './pages/Module.js';

function App() {
  const {isAuth} = useLocalSt()
  useAuth()
  const JWT = useSelector(({profile})=>profile.JWT)
  const showRoutes = JWT || isAuth 
  return (
    <>
      <Header />
      {showRoutes ?
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/module/:code" exact element={<Module />} />
          <Route path="/:name/:request" exact element={<Profile />} />
          <Route path="/create-module" exact element={<Create />} />
          <Route path="*" element={<Error />} />
        </Routes> :
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Main />} />
          <Route path="/auth/:path" exact element={<Auth />} />
          <Route path="/:name/:request" exact element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      }
    </>
  );
}

export default App;

const Error = () =>{
  return(
    <div>404</div>
  )
}