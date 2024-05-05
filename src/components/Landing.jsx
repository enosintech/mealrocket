import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { landingPageImage1, landingPageImage2, landingPageImage3, landingPageImage4 } from "../lib";
import { noTriggerToAnimations } from "../utils/animations";

const Landing = () => {

    useGSAP(() => {
        const imgs = gsap.utils.toArray(".motiv");
        const next = 1;
        const fade = 1;
        
        gsap.set(imgs[0], {autoAlpha: 1})

        const crossFade = () => {
            gsap.timeline()
            .to(imgs[0], {autoAlpha: 0, duration: fade})
            .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)

            imgs.push(imgs.shift())

            gsap.delayedCall(next, crossFade);
        }

        gsap.delayedCall(next, crossFade);

        noTriggerToAnimations("#scrollBall", {
            yPercent: 150,
            yoyo: true,
            repeat: -1,
            duration: 0.8,
        })

    }, [])

  return (
    <section className="w-full">
        <div className="w-full h-full relative">
            <img className="w-full h-full object-cover absolute motiv" alt="landing Page Image 1" src={landingPageImage2}/>
            <img className="w-full h-full object-cover absolute motiv" alt="landing Page Image 1" src={landingPageImage3}/>
            <img className="w-full h-full object-cover absolute motiv" alt="landing Page Image 1" src={landingPageImage4}/>
            <img className="w-full h-full object-cover absolute motiv" alt="landing Page Image 1" src={landingPageImage1} />
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[70%] to-black"></div>
            <div className="absolute bottom-0 z-20 flex flex-col items-center gap-y-5 left-0 right-0 mx-auto">
                <div className="flex items-center justify-center gap-x-5">
                    <div className="bg-red-900 hover:opacity-70 active:opacity-50 cursor-pointer p-5 rounded-full">
                        <p className="font-nohemiBold text-xl">ORDER FOOD</p>
                    </div>
                    <div className="bg-white hover:opacity-70 active:opacity-50 cursor-pointer p-5 rounded-full">
                        <p className="font-nohemiBold text-xl text-black">RESERVE TABLE</p>
                    </div>
                </div>
                <h1 className="w-fit text-[150px] font-nohemiBlack">MEALROCKET</h1>
                <p className="text-xl font-nohemiMedium -translate-y-10">ESTABLISHED 2021</p>
            </div>

            <div className="absolute bottom-5 z-20 left-[2%] w-[30px] h-[60px] rounded-full border-4 border-white flex items-start justify-center py-1">
                <span id="scrollBall" className="rounded-full w-4 h-4 bg-white" />
            </div>
        </div>
    </section>
  )
}

export default Landing;
