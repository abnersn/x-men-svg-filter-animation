import gsap from "https://cdn.skypack.dev/gsap@3.7.0";

const tl = gsap.timeline({
  // repeat: -1,
  // yoyo: true,
  defaults: {
    ease: 'none'
  },
  paused: true
})

tl
  .to('.mask', {
    translateY: '100%',
    duration: 3,
  })
  .to('.bg-color', {
    attr: {
      fill: '#ffd11b'
    },
    duration: 2
  }, '<+=1')

const $foreground = document.getElementById('foreground')
let frame = null

function handleMoveEvent(ev) {
  if (frame) {
    window.cancelAnimationFrame(frame)
  }

  frame = window.requestAnimationFrame(() => {
    const yPos = ev.type === 'mousemove' ? ev.clientY : ev.touches[0].clientY
    const rect = $foreground.getBoundingClientRect();
  
    const relPos = (yPos - rect.top) / (rect.bottom - rect.top)
    if (relPos < 0 || relPos > 1) {
      return
    }
    tl.progress(relPos)
  })
}

$foreground.addEventListener('mousemove', handleMoveEvent)
$foreground.addEventListener('touchmove', handleMoveEvent)
$foreground.addEventListener('touchstart', handleMoveEvent)