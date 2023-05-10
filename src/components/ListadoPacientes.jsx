import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  //console.log(pacientes.length);
 

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
        
        {pacientes && pacientes.length ?  (
            <>
                <h1 className="font-black text-center text-3xl">Listado Pacientes</h1>
                <p className="text-lg mt-5 text-center mb-10">
                    Administra tus{' '}
                    <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                </p>

                  { pacientes.map( (paciente) => (
                    
                    <Paciente 
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}
                      
                    />
                
                    

                  ) )} 
              </> 
           ) : (
              <>
                <h1 className="font-black text-center text-3xl">No hay Pacientes</h1>
                <p className="text-lg mt-5 text-center mb-10">
                    Agrega los Pacientes {' '}
                    <span className="text-indigo-600 font-bold">Para que puedas verlos aquí.</span>
                </p>
              </>
        )}

        

        
        
    </div>
  )
}

export default ListadoPacientes
