// ─── Selectors ────────────────────────────────────────────────────────────────
const giftButton   = document.getElementById('giftButton')
const giftModal    = document.getElementById('giftModal')
const giftClose    = document.getElementById('giftClose')
const letterSection = document.getElementById('letterSection')
const giftSection  = document.getElementById('giftSection')

// ─── Modal controls ───────────────────────────────────────────────────────────
function openGift() {
  giftModal.classList.add('is-open')
  giftModal.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
}

function closeGift() {
  giftModal.classList.remove('is-open')
  giftModal.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}

giftButton.addEventListener('click', openGift)
giftClose.addEventListener('click', closeGift)
giftModal.addEventListener('click', e => { if (e.target === giftModal) closeGift() })
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGift() })

// ─── Floating particles ────────────────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById('particles')
  const symbols = ['💕', '🌸', '✨', '💖', '🌷', '⭐', '🥀', '💗']
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div')
    el.className = 'particle'
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)]
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      animation-delay: ${Math.random() * 12}s;
      animation-duration: ${9 + Math.random() * 9}s;
      font-size: ${0.7 + Math.random() * 1.1}rem;
    `
    container.appendChild(el)
  }
}
createParticles()

// ─── Page load animations ──────────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('not-loaded')

    // Typewriter title
    const titleEl = document.getElementById('title')
    const letters = 'HAPPY BIRTHDAY 🌸'.split('')
    let i = 0
    function nextLetter() {
      if (i < letters.length) {
        const span = document.createElement('span')
        span.textContent = letters[i]
        if (letters[i] === ' ') span.style.display = 'inline-block', span.style.width = '0.5em'
        titleEl.appendChild(span)
        i++
        setTimeout(nextLetter, 180)
      }
    }
    nextLetter()

    // Fade in letter after title finishes
    setTimeout(() => {
      letterSection.classList.add('visible')
    }, 4000)

    // Fade in gift section after letter
    setTimeout(() => {
      giftSection.classList.add('visible')
    }, 5200)

  }, 1000)
})
