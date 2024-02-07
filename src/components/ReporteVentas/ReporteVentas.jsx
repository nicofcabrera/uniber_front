import axios from 'axios';
import { useEffect, useState } from 'react';


const ReporteVentas = () => {
  const [venta, setVenta] = useState([])

  const getVenta = async () => {
    try {
    const {data} = await axios.get('http://localhost:8000/venta');
      setVenta(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getVenta()
    
  },[])


  return (
    <>
      <h2 className='mb-3'>Reporte Ventas</h2>
      <table className="table table-responsive table-secondary table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Total Mov. en Pesos</th>
              <th scope="col">Fecha de la venta</th>
              <th scope="col">Comp. Factura</th>
            </tr>
          </thead>
          <tbody>
            {
              venta.map(result => (
                <tr key={result.ID}>
                  <td>{result.ID}</td>
                  <td>{result.TOTAL}</td>
                  <td>{result.FEC}</td>
                  <td>{result.NUM}</td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </>
  )
}

export default ReporteVentas