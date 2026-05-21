import {House} from 'lucide-react'
import abc from '../../../assets/abc.jpg'
import img9 from '../../../assets/img9.jpg'

const Home = () => {
  return (
    <div className="bg-black">
      <House className='absolute left-2 bottom-140.5 cursor-pointer  hover:text-blue-300' onClick={function(){
          window.location.href = "/Home"
      }}/>
      <img className='h-40 w-110 relative left-112 top-10' src={abc}/>
      <div>
      <img className='h-80 w-75 relative left-60 top-20' src={img9}/>
      </div>
      <div className="h-auto w-180 bg-black text-white font-medium shadow-2xl shadow-white/30 p-8 leading-7 rounded-lg relative left-150 bottom-55">
      <h1 className="text-justify">
       इंजीनियर अविनाश साहू अपना दल (एस) के एक बेहद ऊर्जावान, 
       पढ़े-लिखे और समर्पित युवा नेता हैं, 
       जो वर्तमान में पार्टी के आईटी मंच (IT Cell) के प्रदेश अध्यक्ष की महत्वपूर्ण जिम्मेदारी संभाल रहे हैं। 
       वर्तमान में, वह मटेरा विधानसभा क्षेत्र (284) में जमीनी स्तर पर बेहद सक्रिय हैं, 
       जहाँ उनका मुख्य फोकस युवाओं को राजनीति की मुख्यधारा से जोड़ना और बूथ स्तर तक संगठन के नेटवर्क को मजबूत करना है। 
       पार्टी की राष्ट्रीय अध्यक्ष और केंद्रीय मंत्री अनुप्रिया पटेल के दिशा-निर्देशन में वे संगठन को डिजिटल युग में एक नई दिशा दे रहे हैं। 
       एक इंजीनियर होने के नाते वे तकनीकी रूप से बेहद सक्षम हैं, 
       जिसका लाभ वे सोशल मीडिया और डिजिटल माध्यमों के जरिए पार्टी की नीतियों को जन-जन तक पहुँचाने में कर रहे हैं।
      </h1>
    </div>
    </div>
  )
}

export default Home
