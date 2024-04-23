const scorllBtn = document.querySelector('.top')
const rootEl = document.documentElement

document.addEventListener('scroll', showBtn)
scorllBtn.addEventListener('click', backToTop)

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
  const scrollPercentage = (rootEl.scrollTop / scrollTotal) * 100

  if (scrollPercentage >= 30) {
    scorllBtn.classList.add('show-btn')
  } else {
    scorllBtn.classList.remove('show-btn')
  }
}

function backToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
