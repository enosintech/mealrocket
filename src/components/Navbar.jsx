import { useGSAP } from "@gsap/react";

import { triggerPinAnimations, triggerToAnimations } from "../utils/animations";

const Navbar = () => {

  useGSAP(() => {

    triggerToAnimations(".hiddenNav", {
      opacity: 1,
      ease: "power1.out",
      duration: 0.5
    }, {
      trigger: "#navBarTrigger",
      start: "top 10%",
      toggleActions: "play none none reverse",
    })

    triggerPinAnimations("#navBar", "top top", "bottom top", "html", true)

  }, [])

  return (
    <nav id="navBar" className='w-full h-[100px] relative z-[100] flex items-center justify-between px-20'>
      <div className="hiddenNav opacity-0 absolute left-20">
        <h1 id="title" className="text-[35px] font-nohemiBold">MEALROCKET</h1>
      </div>
      <div className="p-5 pointer-events-none opacity-0">
        <p className="text-black font-nohemiMedium">LET'S CHAT</p>
      </div>
      <div className='rounded-full hiddenNav opacity-0 opaqueBackground p-5 px-10 flex items-center justify-center gap-5 font-nohemiMedium cursor-pointer'>
        <p className="hover:text-red-900 active:opacity-40">ABOUT</p>
        <p className="hover:text-red-900 active:opacity-40">FOOD</p>
        <p className="hover:text-red-900 active:opacity-40">VISIT US</p>
      </div>
      <div className='p-5 rounded-full bg-white shadow hover:bg-red-900 transition-all group cursor-pointer'>
        <p className='text-black font-nohemiMedium group-hover:text-white'>LET'S CHAT</p>
      </div>
    </nav>
  )
}

export default Navbar;
