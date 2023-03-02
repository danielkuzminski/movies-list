//styles
import './App.css';

//router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages components
import Home from './pages/Home'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import Signup from './pages/Signup'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

//components
import Navbar from './components/Navbar';

// authentication
import { useAuthContext } from './hooks/useAuthContext'

function App() {


  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='/movies' element={user ? <Movies /> : <Navigate to='/login'/>} />
            <Route path='/movies/:id' element={user ? <Movie /> : <Navigate to='/login' />} />
            <Route path='/signup' element={user ? <Navigate to='/' /> : <Signup />} />
            <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
