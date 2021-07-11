import gsap from "https://cdn.skypack.dev/gsap@3.7.0";

const tl = gsap.timeline({
  repeat: -1,
  defaults: {
    transformOrigin: 'center',
    ease: 'Quad.easeInOut'
  }
})

tl
  .fromTo('.mask',
  {
    translateX: '-50%',
    scale: 2,
    translateY: '-20%',
    duration: 3
  },
  {
    translateX: '0%',
    scale: 2,
    translateY: '130%',
    duration: 3
  })
  .to('.bg-color', {
    fill: '#ffd11b',
    delay: 1,
    duration: 1.5
  }, '<')
  .set('.turbulence', {
    attr: { seed: Date.now() }
  })
  .fromTo('.mask',
  {
    translateX: '0%',
    scale: 2,
    translateY: '-170%',
    duration: 3
  },
  {
    translateX: '-50%',
    scale: 2,
    translateY: '-20%',
    duration: 3
  })
  .to('.bg-color', {
    fill: '#4a5eb2',
    delay: 1,
    duration: 1
  }, '<')
  .set('.turbulence', {
    attr: { seed: Date.now() }
  })