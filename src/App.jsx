import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ReporteEntrega from './components/ReporteEntrega/ReporteEntrega'
import ReporteVentas from './components/ReporteVentas/ReporteVentas'

function App() {


  return (
    <>
      <HashRouter>
          <header className='mb-4'>
          <h1 className='text-decoration-underline'>Prueba Tecnica Uniber</h1>
          <p>Clickear el boton para ver el reporte</p>
          <p>👇</p>
          </header>
          <nav className='d-flex justify-content-center gap-3 mb-5'>
            <Link to={'/ventas'} className='btn btn-secondary text-white'>Ventas</Link>
            <Link to={'/entrega'} className='btn btn-secondary text-white'>Entrega</Link>
          </nav>
        <Routes>
          <Route path='ventas' element={<ReporteVentas /> } />
          <Route path='entrega' element={<ReporteEntrega /> } />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
