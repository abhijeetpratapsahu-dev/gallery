import { Routes, Route } from 'react-router-dom'
import Nav from './Component/Navbar/Nav'
import Home from './Home'
import About from './Component/Navbar/Pages/about'
import Contact from './Component/Navbar/Pages/contact'
import Gallery from './Component/Navbar/Pages/gallery'
import HelpingHand from './Component/Navbar/Pages/helping-hand'
import Press from './Component/Navbar/Pages/press'
import Profile from './Component/Navbar/Pages/profile'
import Tours from './Component/Navbar/Pages/tours'
import Videos from './Component/Navbar/Pages/videos'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className='w-full min-h-screen bg-black text-white flex flex-col justify-start'>
      <Analytics />

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/helping-hand" element={<HelpingHand />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App