const title = document.querySelector('.title')
const text = `I Have Something`.split('')
const composer = document.getElementById('composer')
const messageInput = document.getElementById('message')
const giftInput = document.getElementById('giftLink')
const savedMessage = localStorage.getItem('flowerMessage')
const savedGiftLink = localStorage.getItem('flowerGiftLink')

if (savedMessage) {
  messageInput.value = savedMessage
}

if (savedGiftLink) {
  giftInput.value = savedGiftLink
}

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

composer.addEventListener('submit', (event) => {
  event.preventDefault()

  const message = messageInput.value.trim() || 'I love you more than words can say.'
  const giftLink = giftInput.value.trim()
  const params = new URLSearchParams()

  localStorage.setItem('flowerMessage', message)
  localStorage.setItem('flowerGiftLink', giftLink)
  params.set('message', message)

  if (giftLink) {
    params.set('gift', giftLink)
  }

  window.location.href = `flower.html?${params.toString()}`
})
