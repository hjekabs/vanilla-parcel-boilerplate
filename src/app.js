function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      Hello world
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;