import Navbar from './Navbar';
import { useGSAP } from '@gsap/react';

import { triggerFromAnimations, triggerToAnimations } from '../utils/animations';
import { heroImage } from '../lib';

const Hero = () => {

  useGSAP(() => {

    triggerToAnimations(".worder", {
      opacity: 1,
      ease: "power1",
      stagger: 1
    }, {
      trigger: "#navBar",
      start: "top top",
      endTrigger: "#highlights",
      end: "top 65%",
      scrub: true,
    })

    triggerFromAnimations("#heroImage", {
      scale: 1.2,
    }, {
      trigger: "#heroImage",
      start: "top bottom",
      scrub: 5.5,
    })

  }, [])

  return (
    <section id="navBarTrigger" className='flex flex-col w-full'>
      <Navbar />
      <div className='w-full h-[calc(100vh-100px)] flex flex-col items-center'>
        <div className='w-full h-1/2 flex items-center justify-center overflow-hidden relative'>
          <img id="heroImage" src={heroImage} className="size-[500px] translate-y-28 rotate-[15deg]"/>
          <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
        </div>
        <div id="wordTrigger" className='w-full h-1/2 flex flex-col items-center justify-center'>
          <p className='text-8xl font-nohemiMedium w-[50%] max-w-[50%] flex justify-center flex-wrap gap-x-6 h-fit text-center'>HOME
            <span className='opacity-[0.08] worder font-nohemiThin'>OF</span>
            <span className='opacity-[0.06] worder font-nohemiThin'>THE</span>
            <span className='opacity-[0.04] worder font-nohemiExtraLight'>WORLD'S</span>
            <span className='opacity-[0.02] worder font-nohemiBold'>BEST</span>
            <span className='text-red-900 font-nohemiExtraBold'>SHARWAMA</span>
          </p>
          <div className='w-full py-1 px-4 font-nohemiSemiBold flex items-center justify-center'>
            <p>VISIT US AT LEVY MALL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
