// styles
import './Home.css'

// router
import { Link } from 'react-router-dom'

// components
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="direction-container">
        <Link to='/movies' className='direction-card movies'>
          <span>Filmy</span>
        </Link>
        <Link to='/series' className='direction-card series'>
          <span>Seriale</span>
        </Link>
        <Link to='/watched' className='direction-card watched'>
          <span>Obejrzane</span>
        </Link>
      </div>
    </div>
  )
}
