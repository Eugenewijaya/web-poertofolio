import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
  // Fade in elements on scroll
  gsap.utils.toArray('.fade-in').forEach((element: any) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  // Slide in elements from the side
  gsap.utils.toArray('.slide-in').forEach((element: any) => {
    gsap.from(element, {
      opacity: 0,
      x: (index) => index % 2 === 0 ? -100 : 100,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })
}

