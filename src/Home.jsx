import Bann from './Component/Navbar/Banner/Bann'
import Left from './Component/Navbar/Leftsidetext/left'
import Iq from './Component/Navbar/Img/img'

const Home = () => {
  return (
    <div className='bg-white min-h-full min-w-full text-black relative'>
      <Bann />
      <div className='w-screen h-full max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6 items-start'>
        <Left />
        <Iq />
      </div>
    </div>
  )
}

export default Home