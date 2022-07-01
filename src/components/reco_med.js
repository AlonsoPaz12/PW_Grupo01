import 'bootstrap/dist/css/bootstrap.min.css'

const Reco_med = () => {
    return(
        <div className='container'>
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Tipo de consulta</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Imagen 1</td>
                <td>Alonso Paz</td>
                <td>Cardiología Clínica</td>
                <td>Presencial</td>
                <td><a href="/perfil_med.html"><button type="button" className="btn btn-outline-success" >Ver más</button></a></td>
              </tr>
              <tr>
                <td>Imagen 2</td>
                <td>Juler Hermitaño</td>
                <td>Cirugía General</td>
                <td>Virtual</td>
                <td><button type="button" className="btn btn-outline-success">Ver más</button></td>
              </tr>
              <tr>
                <td>Imagen 3</td>
                <td>Mauricio Micali</td>
                <td>Dermatologia</td>
                <td>Virtual</td>
                <td><button type="button" className="btn btn-outline-success">Ver más</button></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default Reco_med