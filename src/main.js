import './scss/app.scss';
import App from './App'

const app = () => {
  document.getElementById('app').appendChild(App())
}
// Load app
app()
