import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const triggerFromToAnimations = (target, fromAnimationProps, toAnimationProps, scrollProps) => {
    gsap.fromTo(target, {
        ...fromAnimationProps
    }, {
        ...toAnimationProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
}

export const triggerToAnimations = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
}

export const triggerFromAnimations = (target, animationProps, scrollProps) => {
    gsap.from(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
}

export const noTriggerToAnimations = (target, animationProps) => {
    gsap.to(target, {
        ...animationProps
    })
}

export const noTriggerFromAnimations = (target, animationProps) => {
    gsap.from(target, {
        ...animationProps
    })
}

export const triggerPinAnimations = (target, start = "top top", end = "bottom -100%", endTrigger, pin = true) => {
    ScrollTrigger.create({
        trigger: target,
        start: start,
        end: end,
        endTrigger: endTrigger,
        pin: pin
    })
}