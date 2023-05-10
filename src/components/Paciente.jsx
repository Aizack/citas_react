
function Paciente({paciente, setPaciente, eliminarPaciente}) {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;
    
    const handleEliminar = () => {
        const respuesta = confirm('¿Seguro deseas eliminar al paciente: '+ nombre + ' con propietario: '+ propietario + '?' );
        if (respuesta){
            eliminarPaciente(id);
        }
    }
  return (
    <div className="m-3 bg-white shadow-lg px-5 py-10 rounded-md w-auto ">
            <p className="font-bold uppercase text-gray-700 mb-3">Mascota: {' '}
                <span className=" font-normal" >{nombre}</span>
            </p>
        
            <p className="font-bold uppercase text-gray-700 mb-3">Propietario: {' '}
                <span className=" font-normal" >{propietario}</span>
            </p>

            <p className="font-bold uppercase text-gray-700 mb-3">E-Mail: {' '}
                <span className=" font-normal" >{email}</span>
            </p>
        
            <p className="font-bold uppercase text-gray-700 mb-3">Fecha: {' '}
                <span className=" font-normal" >{fecha}</span>
            </p>
        
            <p className="font-bold uppercase text-gray-700 mb-3">Descripción: {' '}
                <span className=" font-normal" >{sintomas}</span>
            </p> {/*descripción*/}

            <div className=" mt-8">

                <button 
                type="button" 
                className="py-2 px-10 bg-indigo-600 
                hover:bg-indigo-800 rounded-md mr-3 
                text-white uppercase font-bold"
                onClick={() => setPaciente(paciente)}
                > Editar</button>

                <button type="button" 
                className="py-2 px-10 bg-red-600 
                hover:bg-red-800 rounded-md mr-3 
                text-white uppercase font-bold"
                onClick={handleEliminar}>Eliminar</button>
            </div>
    </div> 
  )
}

export default Paciente
