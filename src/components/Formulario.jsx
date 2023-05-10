import { useEffect, useState } from "react"
import Error from "./Error";

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false)

  //Llenar el formulario con UseEffect
  useEffect(() => {
    const {nombre, propietario, email, fecha, sintomas} = paciente;

    if (Object.keys(pacientes).length>0){
      setNombre(nombre);
      setPropietario(propietario);
      setEmail(email);
      setFecha(fecha);
      setSintomas(sintomas);
    }
  }, [paciente])

 
//Generar un ID
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  //Función para envíar datos del formulario.
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validación del formulario

    if ([nombre, propietario, email, fecha, sintomas].includes('') ){
      console.log('Hay al menos un campo vacío');
      setError(true);
      return;
    } setError(false);

    //compilando y copiando información del paciente. 

    const objetoPaciente = {
      nombre, 
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      // Editando Registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
        } else {
      //Nuevo Registro 
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciar el formulario.
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')


  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h3 className="font-black text-center text-3xl">Seguimiento Pacientes</h3>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {' '}
          <span className="text-indigo-600 font-bold">Administralos.</span>
        </p>

        {/* Aquí empieza los campos del Formulario */}

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        >
          {/*Aquí se señala el ERROR*/}

          {error && <Error>Debes llenar todos los campos</Error>}

          {/* Aquí Empieza el input 1 Mascota */}

          <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input 
              id="nombre"
              type="text" 
              placeholder="Nombre de la Mascota" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              value={nombre} 
              onChange= { (e) => setNombre(e.target.value)}         
            />
          </div> {/* Aquí termina el input 1 */}
          
          {/* Aquí Empieza el input 2 Propietario */}
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input 
              id="propietario"
              type="text" 
              placeholder="Nombre del Propietario" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario} 
              onChange= { (e) => setPropietario(e.target.value)} 
            />
          </div> {/* Aquí termina el input 2 */}

          {/* Aquí Empieza el input 3 Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              E-mail
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="Escriba su E-mail" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email} 
              onChange= { (e) => setEmail(e.target.value)} 
            />
          </div> {/* Aquí termina el input 3 */}

            {/* Aquí Empieza el input 4 Alta */}
            <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input 
              id="fecha"
              type="date" 
              className="border-2 w-full p-2 mt-2 text-gray-500 rounded-md"
              value={fecha} 
              onChange= { (e) => setFecha(e.target.value)} 
            />
          </div> {/* Aquí termina el input 4 */}

            {/* Aquí Empieza el input 5 Sintomas */}
            <div className="mb-10">
            <label 
              htmlFor="sintomas" 
              className="
                block 
                text-gray-700 
                uppercase 
                font-bold"
              
              > Sintomas </label>
            
            <textarea 
              id="sintomas"
              placeholder="Describa los sintomas de su mascota." 
              className="
                border-2 
                w-full 
                p-2 
                mt-2 
                placeholder-gray-400 
                rounded-md
              "
              value={sintomas} 
              onChange= { (e) => setSintomas(e.target.value)}
            />
          </div> {/* Aquí termina el input 5 */}
            
            {/* Aquí Empieza el input 6 Submit */}
            <input 
              type="submit"
              value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
              className="
              bg-indigo-600 
                w-full 
                mx-auto 
                p-2 
                text-white 
                uppercase 
                font-bold 
                rounded-md 
                md:hover:bg-indigo-800
                cursor-pointer transition-colors                
              "  
            />
            {/* Aquí termina el input 6 */}
        </form>
    </div>
  )
}


export default Formulario
