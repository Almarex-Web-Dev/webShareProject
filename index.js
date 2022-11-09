const shareOptions = document.querySelector('.share__options')
const shareButton = document.querySelector('.share__button')

shareButton.addEventListener('click', () => {
  const isOpen = shareOptions.classList.toggle('show__share-options')
  if (isOpen) {
    shareButton.style.backgroundColor = '#48556a'
  } else {
    shareButton.style.backgroundColor = ''
  }
})

const link = 'https://preeminent-beijinho-af4596.netlify.app/'
const msg = 'Hey check out this article'


const facebook = document.querySelector('.facebook')
facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${link}`

const twitter = document.querySelector('.twitter')
twitter.href = `https://twitter.com/share?&url=${link}&text=${msg}&hastags=html`

const pinterest = document.querySelector('.pinterest')
pinterest.href = `http://pinterest.com/pin/create/button/?url=${link}`
