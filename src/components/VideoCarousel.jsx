import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRepeat } from "@fortawesome/free-solid-svg-icons";

import { highlightSlides } from "../constants/index";
import { noTriggerToAnimations } from "../utils/animations";

const VideoCarousel = () => {

  const videoRef = useRef([]);
  const videoDivRef = useRef([]);
  const videoSpanRef = useRef([]);

  const [ loadedData, setLoadedData ] = useState([]);
  const [ video, setVideo ] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video; 

  useGSAP(() => {
    noTriggerToAnimations("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut"
    })

    noTriggerToAnimations("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none"
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    })
  }, [ isEnd, videoId ])

  useEffect(() => {
    if(loadedData.length > 3){
      if(!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

  useEffect(() => {
    let currentProgress = 0;

    let span = videoSpanRef.current;

    if(span[videoId]){
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if(progress != currentProgress) {
            currentProgress = progress;

            noTriggerToAnimations(videoDivRef.current[videoId], {
              width: window.innerWidth < 1200
              ? "10vw"
              : "4vw"
            })

            noTriggerToAnimations(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white"
            })
          }
        },
        onComplete: () => {
          if(isPlaying){
            noTriggerToAnimations(videoDivRef.current[videoId], {
              width: '12px'
            })

            noTriggerToAnimations(span[videoId], {
              backgroundColor: "#374151",
            })
          }
        }
      })

      if(videoId === 0){
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(videoRef.current[videoId].currentTime / highlightSlides[videoId].videoDuration);
      }

      if(isPlaying){
        gsap.ticker.add(animUpdate)
      } else {
        gsap.ticker.remove(animUpdate)
      }
    }

  }, [videoId, startPlay])

  const handleProcess = (type, i) => {
    switch(type) {
      case 'video-end' : 
        setVideo((prevVideo) => ({...prevVideo, isEnd: true, videoId: i + 1}))
        break;
      case 'video-last' :
        setVideo((prevVideo) => ({...prevVideo, isLastVideo: true}))
        break;
      case 'video-reset' :
        setVideo((prevVideo) => ({...prevVideo, isLastVideo: false, videoId: 0}))
        break;
      case 'play' : 
        setVideo((prevVideo) => ({...prevVideo, isPlaying: !prevVideo.isPlaying}))
        break;
      case 'pause' :
        setVideo((prevVideo) => ({...prevVideo, isPlaying: !prevVideo.isPlaying }))
        break;
      default: 
        return video;      
    }
  };

  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <>
      <div className='w-full flex items-center'>
        {highlightSlides.map((list, index) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="relative sm:w-[70vw] w-[80vw] md:h-[70vh] h-[50vh]">
              <div className="w-full h-full rounded-3xl flex items-center justify-center bg-black overflow-hidden">
                <video id="video" className="pointer-events-none w-full h-full object-cover" preload="auto" playsInline={true} muted ref={(el) => (videoRef.current[index] = el)} onPlay={() => {
                  setVideo((prevVideo) => ({
                    ...prevVideo, isPlaying: true,
                  }))
                }} onLoadedMetadata={(e) => handleLoadedMetadata(index, e)} onEnded={() => 
                  index !== 3
                  ? handleProcess('video-end', index)
                  : handleProcess('video-last')
                }>
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute bottom-12 left-[5%] z-10 text-left">
                  <p className="md:text-4xl text-2xl font-nohemiMedium">
                    {list.textLists[0]}
                  </p>
                  <p className="font-nohemiLight">{list.textLists[1]}</p>
              </div>

              <div className="absolute bottom-14 right-[5%] z-10 text-right">
                <p className="font-nohemiBlack md:text-5xl text-2xl">{list.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex items-center mt-5">
        <div className="flex items-center justify-center backdrop-blur">
          {videoRef.current?.map((_, index) => (
            <span key={index} ref={(el) => (videoDivRef.current[index] = el)} className="mx-2 w-4 h-4 bg-gray-700 rounded-full overflow-hidden relative">
              <span className="absolute h-full w-full rounded-full" ref={(el) => (videoSpanRef.current[index] = el)} />
            </span>
          ))}
        </div>

        <button className="ml-4 w-14 h-14 rounded-full bg-gray-700 backdrop-blur flex items-center justify-center hover:opacity-80 active:opacity-50" onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess("play") : () => handleProcess("pause")}>
            <FontAwesomeIcon icon={isLastVideo ? faRepeat : isPlaying ? faPause : faPlay } size="lg" color="white"/>
        </button>
      </div>
    </>
  )
}

export default VideoCarousel;

