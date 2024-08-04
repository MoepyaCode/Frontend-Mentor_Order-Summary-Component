import React from 'react'
import { Main } from './components'
import { assets } from './assets'

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const screenImage = width > 768 ? assets.desktop : assets.mobile

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Main className='relative grid place-items-center min-w-full'>
      <img src={screenImage} alt="" />
      
    </Main>
  )
}
