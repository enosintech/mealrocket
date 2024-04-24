import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

import { triggerFromAnimations, triggerPinAnimations, triggerToAnimations } from "../utils/animations";
import { aboutImg1, aboutImg2, aboutImg3, spinningPlatterImage } from "../lib";

const About = () => {

  useGSAP(() => {

    const split = SplitType.create(".aboutText", {types: "chars"});

    triggerFromAnimations(split?.chars, {
      opacity: 0,
      duration: 0.001,
      stagger: 0.01,
    }, {
      trigger: split?.chars,
      start: "top 65%"
    })

    triggerFromAnimations(".scaleDown", {
      scale: 1.2,
    }, {
      trigger: ".scaleDown",
      start: "top 85%",
      scrub: 5.5,
    })

    triggerToAnimations("#spinner", {
      rotate: "100%",
    }, {
      trigger: "#spinnerTrigger",
      start: "top top",
      end: "bottom 100%",
      scrub: true,
    })

    triggerToAnimations(".aboutSpinWord", {
      opacity: 1,
      stagger: 0.5,
      ease: "power1"
    }, {
      trigger: "#spinnerTrigger",
      start: "top top",
      end: "bottom 100%",
      scrub: true,
    })

    triggerPinAnimations("#aboutPin");

  }, [])

  return (
    <>
      <section id="about" className='w-full flex items-center justify-center'>
        <div className="w-[85%] h-[85%] flex flex-col">
          <div className="w-full h-1/3 flex flex-col relative items-center">
            <div className="w-full flex items-center mt-10 relative justify-center">
              <p className="aboutText w-[95%] h-full text-3xl text-justify font-nohemiMedium">Meal Rocket is a fast food restaurant located at Levy Shopping Mall. We specialise in western and arabic cuisine such as Sharwama, Chicken and Beef Wraps etc. We also cater at scale for conference events such as weddings etc.</p>
            </div>
          </div>
          <div className="w-full h-2/3 flex items-center justify-evenly">
            <div className="w-[30%] h-[80%] overflow-hidden rounded-[20px]">
              <img className="w-full h-full object-cover scaleDown" src={aboutImg1} alt="first about image" />
            </div>
            <div className="w-[30%] h-[80%] overflow-hidden rounded-[20px]">
              <img className="w-full h-full object-cover scaleDown" src={aboutImg2} alt="second about image" />
            </div>
            <div className="w-[30%] h-[80%] overflow-hidden rounded-[20px]">
              <img className="w-full h-full object-cover scaleDown" src={aboutImg3} alt="third about image" />
            </div>
          </div>
        </div>
      </section>
      <section id="spinnerTrigger" className="w-full h-[300vh] flex flex-col">
        <div id="aboutPin" className="w-full h-[100vh] flex flex-col relative items-center py-24">
          <div className="w-full h-[90%] mt-10 flex items-center justify-center">
            <div className="w-[700px] h-[700px] rounded-full flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full relative flex items-center justify-center">
                <p className="absolute -top-14 font-nohemiMedium aboutSpinWord opacity-0">FOOD CATERING FOR EVENTS</p>
                <p className="absolute -bottom-14 font-nohemiMedium aboutSpinWord opacity-0">FOOD DELIVERY</p>
                <p className="absolute -right-[40%] font-nohemiMedium aboutSpinWord opacity-0">CONSULTANCY</p>
                <p className="absolute -left-[40%] font-nohemiMedium aboutSpinWord opacity-0">RESTAURANT</p>
                <img id="spinner" className="w-full h-full rounded-full object-contain" alt="food platter" src={spinningPlatterImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
