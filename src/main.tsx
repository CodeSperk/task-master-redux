import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import route from './routes/route.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
    <RouterProvider router={route}/>
   </Provider>
  </StrictMode>,
)
