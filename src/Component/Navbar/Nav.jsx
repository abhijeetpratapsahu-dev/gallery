import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='p-2 border-b border-gray-300'>
        <div className='flex gap-8 cursor-pointer'>
          <Link to="/about" className='font-roboto hover:text-green-300'>ABOUT ER.AVINASH SAHU</Link>
          <Link to="/gallery" className='font-roboto hover:text-green-300'>GALLERY</Link>
          <Link to="/tours" className='font-roboto hover:text-green-300'>TOURS</Link>
          <Link to="/press" className='font-roboto hover:text-green-300'>PRESS</Link>
          <Link to="/contact" className='font-roboto hover:text-green-300'>CONTACT US</Link>
          <Link to="/videos" className='font-roboto hover:text-green-300'>VIDEOS</Link>
          <Link to="/helping-hand" className='font-roboto hover:text-green-300'>HELPING HAND</Link>
          <Link to="/profile" className='font-roboto hover:text-green-300'>ER.AVINASH SAHU PROFILE</Link>
        </div>

        <div className="absolute left-270 top-2">
          <input className="w-50 border-white" type="text" placeholder="SEARCH" />
          <div className='cursor-pointer absolute left-[220px] top-[2px] hover:text-red-300'>
            <Search />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav