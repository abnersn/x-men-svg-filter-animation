import gsap from "https://cdn.skypack.dev/gsap@3.7.0";

const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  defaults: {
    ease: 'Quad.easeInOut'
  }
})

tl
  .to('.mask', {
    translateY: '100%',
    duration: 3,
  })
  .to('#bg-color', {
    attr: {
      fill: '#ffd11b'
    },
    duration: 2
  }, '<+=1')