const setDarkMode = () => {
  document.body.classList = 'dark'
  document.getElementById('dark').checked = 'true'
}

const setLightMode = () => {
  document.body.classList = 'light'
  document.getElementById('light').checked = 'true'
}

const radioButtons = document.querySelectorAll('.toggle__wrapper input')

if (localStorage.getItem('color-scheme') === 'dark') {
  setDarkMode()
} else if (localStorage.getItem('color-scheme') === 'light') {
  setLightMode()
} else {
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? setDarkMode()
    : setLightMode()
}

radioButtons.forEach((button) =>
  button.addEventListener('click', (event) => {
    console.log(button.attributes.id.nodeValue, 'clicked')
    if (document.getElementById('dark').checked) {
      setDarkMode()
      localStorage.setItem('color-scheme', 'dark')
    } else {
      setLightMode()
      localStorage.setItem('color-scheme', 'light')
    }
  })
)
