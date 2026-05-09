import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [status, setStatus] = useState('Cargando...')

  useEffect(() => {
    axios.get('/api/health')
      .then(res => setStatus(`Backend: ${res.data.status}`))
      .catch(() => setStatus('Error conectando con backend'))
  }, [])

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>GSE - Gestor de Obras</h1>
      <p>{status}</p>
      <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
        Crear Obra
      </button>
    </div>
  )
}

export default App
