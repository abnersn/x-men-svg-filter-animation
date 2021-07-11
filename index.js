import gsap from "https://cdn.skypack.dev/gsap@3.7.0";

const tl = gsap.timeline({
  // repeat: -1,
  // yoyo: true,
  defaults: {
    ease: 'none'
  },
  paused: true
})

tl.to('.mask', {
  translateX: '50%',
  duration: 20
})

const $picture = document.getElementById('picture')
let frame = null

function handleMoveEvent(ev) {
  if (frame) {
    window.cancelAnimationFrame(frame)
  }

  frame = window.requestAnimationFrame(() => {
    const xPos = ev.type === 'mousemove' ? ev.clientX : ev.touches[0].clientX
    const rect = $picture.getBoundingClientRect();
  
    const relPos = (xPos - rect.left) / (rect.right - rect.left)
    if (relPos < 0 || relPos > 1) {
      return
    }
    // console.log(relPos)
    tl.progress(relPos)
  })
}

$picture.addEventListener('mousemove', handleMoveEvent)
$picture.addEventListener('touchmove', handleMoveEvent)
$picture.addEventListener('touchstart', handleMoveEvent)