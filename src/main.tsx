import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import 'bear-react-carousel/dist/index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App/>
    <CssBaseline/>
  </Provider>
)
