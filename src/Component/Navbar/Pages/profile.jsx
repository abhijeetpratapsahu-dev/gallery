import {House} from 'lucide-react'
import profile from '../../../assets/PROFILE.jpg'
import { FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-white min-h-full min-w-full text-black relative'>
      <img className='h-40 w-30 rounded-full object-cover absolute left-[109vw] top-[11vh]' src={profile}></img>

      <House className='absolute left-2 bottom-150 cursor-pointer hover:text-blue-300' onClick={function(){
          window.location.href = "/"
      }}/>

      <div className='h-auto w-[83vw] border-2 border-black p-4 leading-7 font-bold font-sans rounded-lg absolute left-[2vw] bottom-[35vh]'> 
        <h1 className='text-justify w-full'>
          इंजीनियर अविनाश साहू एक युवा और ऊर्जावान नेता हैं, 
          जो वर्तमान में अपना दल के मध्य प्रदेश अध्यक्ष के रूप में कार्य कर रहे हैं। 
          वे समाज सेवा, युवाओं के विकास और क्षेत्र की समस्याओं को दूर करने के लिए लगातार प्रयास करते रहते हैं। 
          उनकी सरल सोच, मेहनत और जनता से जुड़ाव ने उन्हें लोगों के बीच लोकप्रिय बनाया है। 
          वे शिक्षा, रोजगार, सड़क, स्वास्थ्य और किसानों के हितों के लिए हमेशा आवाज उठाते हैं। 
          लोगों का मानना है कि उनकी नेतृत्व क्षमता और जनसमर्थन उन्हें वर्ष 2027 के विधानसभा चुनाव में एक मजबूत उम्मीदवार बनाएगा। 
          इंजीनियर अविनाश साहू का उद्देश्य समाज में विकास और समानता लाना है, 
          ताकि हर व्यक्ति को आगे बढ़ने का अवसर मिल सके।
          राजनीति के क्षेत्र में इंजीनियर अविनाश साहू विकास, 
          समानता और सामाजिक एकता को सबसे अधिक महत्व देते हैं।
          उनका सपना है कि मध्य प्रदेश का हर गाँव और हर शहर शिक्षा, रोजगार और आधुनिक सुविधाओं से मजबूत बने। 
          वे चाहते हैं कि गरीब और पिछड़े वर्ग के लोगों को भी आगे बढ़ने के समान अवसर मिलें।
          इंजीनियर अविनाश साहू ने हमेशा गरीबों, किसानों, मजदूरों, युवाओं और जरूरतमंद लोगों की समस्याओं को प्राथमिकता दी है। 
          वे गाँव-गाँव और शहर-शहर जाकर लोगों की परेशानियों को सुनते हैं और उनके समाधान के लिए निरंतर प्रयास करते हैं। 
          उनका स्वभाव सरल और मिलनसार है, जिसके कारण हर वर्ग के लोग उनसे आसानी से जुड़ जाते हैं। 
          जनता के प्रति उनका समर्पण और सेवा भावना उन्हें अन्य नेताओं से अलग पहचान दिलाती है।
        </h1>
      </div>
      <div className='absolute left-4 top-[15vh] border-2 border-black p-3 rounded'>
          <a href='https://www.facebook.com/dravinashsahu/' target="_blank"  rel="noopener noreferrer" className='hover:text-blue-900'>
          <FaFacebookF size={30} />
        </a>
      </div>
    </div>
  )
}

export default Home