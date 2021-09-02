// typedWritter

function typeWritter(element) {
  const arrayText = element.innerHTML.split('')
  element.innerHTML = ''
  arrayText.forEach((letra, i) => {
    setTimeout(() => (element.innerHTML += letra), 50 * i)
  })
}

typeWritter(document.querySelector('#machine.logo-p'))

// Scroll Reaveal

const Scroll = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
})

ScrollReveal().reveal('.position-absolute', { delay: 200 })
ScrollReveal().reveal('.title', { delay: 400 })
ScrollReveal().reveal('.col', { delay: 500 })
