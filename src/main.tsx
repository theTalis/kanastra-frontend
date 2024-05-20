import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import ImportDebt from './components/ImportDebt'
import DebtList from './components/DebtList'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ImportDebt />

      <DebtList />
      
    </BrowserRouter>
  </React.StrictMode>,
)
