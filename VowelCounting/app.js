const countEl = document.querySelector('.count')
const input = document.querySelector('input')

input.addEventListener('keyup', () => {
  let word = input.value.toLowerCase()
  let vowelCount = 0
  for (let i = 0; i < word.length; i++) {
    let letters = word[i]
    if (letters.match(/([a,e,i,o,u])/)) {
      vowelCount++
    }
  }
  countEl.innerHTML = `${vowelCount}`
})
