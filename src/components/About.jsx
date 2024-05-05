import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

import { noTriggerToAnimations, triggerFromAnimations, triggerPinAnimations, triggerToAnimations } from "../utils/animations";
import { spinningPlatterImage } from "../lib";
import { workedWith } from "../constants";

const WorkedWith = ({logo, name}) => {
  return (
    <div className="w-1/4 centerAppear min-w-1/4 h-full flex-shrink-0 flex flex-col items-center justify-center gap-y-5">
      <img className="object-contain w-[60%]" src={logo} alt={name} />
      <p className="font-nohemiBold text-2xl text-neutral-500">{name}</p>
    </div>
  )
}

const About = () => {

  useGSAP(() => {

    const split = SplitType.create(".aboutText", {types: "words"});

    triggerFromAnimations(split?.words, {
      y: -50,
      x: -25,
      opacity: 0,
      duration: 0.1,
      stagger: 0.08,
    }, {
      trigger: "#about",
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

    noTriggerToAnimations("#workSlider", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      yoyo: true,
      repeat: -1,
    })

    triggerPinAnimations("#aboutPin");

  }, [])

  return (
    <>
      <section id="about" className='w-full h-fit flex items-center justify-center'>
        <div className="w-[85%] h-fit flex flex-col">
          <div className="w-full h-[40vh] overflow-visible mt-10 flex flex-col relative items-center">
            <div className="w-full h-fit flex items-center relative justify-center">
              <p className="aboutText w-full h-fit text-6xl text-justify font-nohemiBold">Meal Rocket is a fast food restaurant located at Levy Shopping Mall. We specialise in western and arabic cuisine such as Sharwama, Chicken and Beef Wraps etc. We also cater at scale for conference events such as weddings etc.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="spinnerTrigger" className="w-full h-[300vh] flex flex-col">
        <div id="aboutPin" className="w-full h-[100vh] flex flex-col relative items-center py-24">
          <div className="w-full h-[90%] mt-20 flex items-center justify-center">
            <div className="w-[700px] h-[700px] rounded-full flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full relative flex items-center justify-center text-2xl">
                <p className="absolute -top-14 font-nohemiMedium aboutSpinWord opacity-0">FOOD CATERING FOR EVENTS</p>
                <p className="absolute -right-[40%] font-nohemiMedium aboutSpinWord opacity-0">RESTAURANT</p>
                <p className="absolute -bottom-14 font-nohemiMedium aboutSpinWord opacity-0">FOOD DELIVERY</p>
                <p className="absolute -left-[40%] font-nohemiMedium aboutSpinWord opacity-0">CONSULTANCY</p>
                <img id="spinner" className="w-full h-full rounded-full object-contain" alt="food platter" src={spinningPlatterImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[60vh] mt-20 flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-3xl font-nohemiBold">WORKED WITH</h1>
        <div className="w-[75%] h-[70%] overflow-hidden">
          <div id="workSlider" className="w-full h-full flex">
            {workedWith.map((company, index) => (
              <WorkedWith key={company.id} index={index} {...company} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
