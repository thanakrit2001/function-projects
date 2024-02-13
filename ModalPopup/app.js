const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const modalContainter = document.querySelector('.modal-containter')

openBtn.addEventListener('click', () => {
  modalContainter.classList.add('show')
})

closeBtn.addEventListener('click', () => {
  modalContainter.classList.remove('show')
})
