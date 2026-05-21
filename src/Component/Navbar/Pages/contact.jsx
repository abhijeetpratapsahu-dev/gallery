import {House} from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-black">
      <House className='absolute left-2  bottom-141 cursor-pointer hover:text-blue-300' onClick={function(){
          window.location.href = "/"
      }}/>

      
    </div>
  )
}

export default Contact