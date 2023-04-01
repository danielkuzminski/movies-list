import {useEffect, useState} from 'react'
import './ScrollBar.css'

export default function ScrollBar() {
    const [scroll, setScroll] = useState(0)

    const progressHandler = () => {
        const totalScrol = document.documentElement.scrollTop

        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrollValue = totalScrol / windowHeight * 100

        setScroll(scrollValue)
    }

    useEffect(() => {
        window.addEventListener('scroll', progressHandler)

        return () => window.removeEventListener('scroll', progressHandler)
    }, [])

  return (
    <div className='progress-container'>
        <div className="progress-bar" style={{width: `${scroll}%`}}></div>
    </div>
  )
}
