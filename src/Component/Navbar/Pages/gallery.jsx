import React from 'react'
import {House} from 'lucide-react'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'
import img7 from '../../../assets/img7.jpg'
import img8 from '../../../assets/img8.jpg'
import img9 from '../../../assets/img9.jpg'
import img10 from '../../../assets/img10.jpg'

const gallery = () => {
  return (
      <div className='py-7 flex gap-4 flex-wrap justify-center absolute top-28'>
      <img className='h-64 w-64 object-cover cursor-pointer hover-scale-90' src={img1} />
      <img className='h-64 w-64 object-cover cursor-pointer hover-scale-90' src={img2} />
      <img className='h-64 w-64 object-cover cursor-pointer hover-scale-90' src={img3} />
      <img className='h-64 w-64 object-cover cursor-pointer hover-scale-90' src={img4} />
      <img className='h-64 w-64 object-cover cursor-pointer hover-scale-90' src={img5} />
      <img className='h-50 w-64 object-cover cursor-pointer hover-scale-90' src={img6} />
      <img className='h-50 w-64 object-cover cursor-pointer hover-scale-90' src={img7} />
      <img className='h-50 w-64 object-cover cursor-pointer hover-scale-90' src={img8} />
      <img className='h-50 w-64 object-cover cursor-pointer hover-scale-90' src={img9} />
      <img className='h-50 w-64 object-cover cursor-pointer hover-scale-90' src={img10} />


      <House className='absolute left-2 bottom-140.5 cursor-pointer hover:text-blue-300' onClick={function(){
          window.location.href = "/Home"
      }}/>

      <div>
        <h1 className='text-3xl font-semibold absolute bottom-137 left-152'>GALLERY</h1>
      </div>
    </div>
  )
}

export default gallery
