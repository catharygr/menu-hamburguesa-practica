const btn = document.querySelector('#btn')
const nav = document.querySelector('#navegacion')

btn.addEventListener('click', abrirHamburguesa)

function abrirHamburguesa() {
  const visibilidad = nav.getAttribute('data-visible')
  if(visibilidad === 'false') {
    nav.setAttribute('data-visible', true)
    btn.setAttribute('aria-expanded', true)
  } else {
    nav.setAttribute('data-visible', false)
    btn.setAttribute('aria-expanded', false)
    

  }
}