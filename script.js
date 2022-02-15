

const botaoAbrir = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const botaoFechar = document.querySelector('.close-btn')

botaoAbrir.addEventListener('click', () => {
    modal.classList.toggle('open-modal')
})
botaoFechar.addEventListener('click', () => {
    modal.classList.remove('open-modal')
})