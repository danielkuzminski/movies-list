//styles
import './App.css';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages components
import Home from './pages/Home'
import Movies from './pages/Movies'
import Movie from './pages/Movie'
import Signup from './pages/Signup'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<Movie />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
