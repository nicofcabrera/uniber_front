import axios from 'axios';
import { useEffect, useState } from 'react';


const ReporteEntrega = () => {
  const [entrega, setEntrega] = useState([])

  const getEntrega = async () => {
    try {
    const {data} = await axios.get('http://localhost:8000/entrega');
      setEntrega(data)
    } catch (error) {
      console.error(error);
    }
  }

   useEffect(() => {
    getEntrega()
  },[])

  return (
    <>
      <h2 className='mb-3'>Reporte Entregas</h2>
      <table className="table table-responsive table-secondary table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Items de la Entrega</th>
          <th scope="col">FECHA DE ENTREGA</th>
          <th scope="col">IDENTIFICADOR DE LA ENTREGA</th>
          <th scope="col">FACTURA</th>
        </tr>
      </thead>
      <tbody>
        {
          entrega.map((result,index) => (
            <tr key={`${result.ID}-${index}`}>
              <td>{result.ID}</td>
              <td>{result.ITEM}</td>
              <td>{result.FECHA_ENT}</td>
              <td>{result.MOVIVTA_ID}</td>
              <td>{result.MOVIVTA_SUC}</td>
            </tr>
          ))
        }
      </tbody>
      </table>
    </>
  )
}

export default ReporteEntrega