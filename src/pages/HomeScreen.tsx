

import Aboutus from '../components/Aboutus'
import HeroSection from '../components/HeroSection'
import Solutions from '../components/Solutions'
import WhyChoose from '../components/WhyChoose'
import { Handshake } from 'lucide-react'


const HomeScreen = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
    
 <HeroSection/>
      {/* ABOUT SECTION */}
      
        <Aboutus/>
       
        <Solutions/>
        <div
  className="
    min-h-screen 
    flex flex-col 
    items-center 
    justify-center 
    text-center
    px-4 sm:px-6 md:px-8
    bg-black
  "
>
  <Handshake className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 text-orange-400 stroke-1" />

  <h2
    className="
      mt-6
      text-3xl 
      sm:text-4xl 
      md:text-5xl 
      lg:text-7xl 
      font-bold 
      bg-gradient-to-r 
      from-orange-600 
      to-amber-400 
      bg-clip-text 
      text-transparent
    "
  >
    Why Choose Us
  </h2>
</div>

        <WhyChoose/>
      
    </div>

  )
}

export default HomeScreen
