import gsap from "https://cdn.skypack.dev/gsap@3.7.0";

const tl = gsap.timeline({
  repeat: -1,
  defaults: {
    transformOrigin: 'center',
    ease: 'Quad.easeInOut'
  }
})

tl
  .to('.mask', {
    translateY: '100%',
    repeat: 1,
    yoyo: true,
    duration: 3
  })