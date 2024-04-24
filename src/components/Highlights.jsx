import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

import VideoCarousel from "../components/VideoCarousel";

import { triggerToAnimations } from "../utils/animations";

const Highlights = () => {

  useGSAP(() => {
    
    triggerToAnimations(".highlightAppear", {
      opacity: 1,
      y: 0.
    }, {
      trigger: ".highlightAppear",
    })

  }, [])

  return (
    <section id="highlights" className='w-full bg-zinc-950 px-20 flex flex-col justify-center gap-y-4'>
      <div className="w-full py-4 flex items-center justify-end">
        <div className="highlightAppear opacity-0 -translate-y-20 flex flex-row-reverse items-center gap-x-4 rounded-full text-white transition-all cursor-pointer group">
          <FontAwesomeIcon icon={faBars} className="text-white transition-all group-hover:text-red-900 group-active:opacity-50" />
          <p className="font-nohemiMedium group-hover:text-red-900 transition-all group-active:opacity-50">VIEW MENU</p>
        </div>
      </div>

      <VideoCarousel />

    </section>
  )
}

export default Highlights;
