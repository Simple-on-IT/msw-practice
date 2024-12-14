
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App/ui/App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('../public/mocks/browser.ts')

  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
  )
})


