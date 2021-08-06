import gsap from "gsap";
import { throttle } from "lodash";

const tl = gsap.timeline({
  paused: true,
  defaults: {
    ease: 'none'
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


const $picture = document.querySelector('.picture')

function handleMoveEvent(ev) {
  const rect = $picture.getBoundingClientRect();

  const relPos = (ev.clientY - rect.top) / (rect.bottom - rect.top)

  tl.progress(relPos)
}

$picture.addEventListener('mousemove', throttle(handleMoveEvent, 60))