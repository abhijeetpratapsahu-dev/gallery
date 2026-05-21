import Bann from './Component/Navbar/Banner/Bann'
import Left from './Component/Navbar/Leftsidetext/left'
import Iq from './Component/Navbar/Img/img'

const Home = () => {
  return (
    <>
      <Bann />
      <div className='w-full max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6 items-start'>
        <Left />
        <Iq />
      </div>
    </>
  )
}

export default Home