import { Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

   const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${search}`);
    }
  };
  return (
    <div>
      <nav className='p-2 border-b border-black'>
        <div className='flex gap-8 cursor-pointer'>
          <Link to="/about" className='font-roboto hover:text-green-600 font-bold'>ABOUT ER.AVINASH SAHU</Link>
          <Link to="/gallery" className='font-roboto hover:text-green-600 font-bold'>GALLERY</Link>
          <Link to="/tours" className='font-roboto hover:text-green-600 font-bold'>TOURS</Link>
          <Link to="/press" className='font-roboto hover:text-green-600 font-bold'>PRESS</Link>
          <Link to="/contact" className='font-roboto hover:text-green-600 font-bold'>CONTACT US</Link>
          <Link to="/videos" className='font-roboto hover:text-green-600 font-bold'>VIDEOS</Link>
          <Link to="/helping-hand" className='font-roboto hover:text-green-600 font-bold'>HELPING HAND</Link>
          <Link to="/profile" className='font-roboto hover:text-green-600 font-bold'>ER.AVINASH SAHU PROFILE</Link>
        </div>

        <div className="absolute left-276 top-1.5">
          <input className="w-50 px-1 border-b border-black" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
          <div className='cursor-pointer absolute left-[210px] top-[2px] hover:text-red-500'>
            <Search />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav