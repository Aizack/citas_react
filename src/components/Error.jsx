function Error({children}) {
  return (
    
    <div className=" bg-red-700 p-2 mb-7 text-center uppercase font-bold text-white rounded-md">
            <p>{children}</p>{/**con el children no es necesario crean varios props si tu intención es crear más de un elemento html.*/}
            
    </div>
  )
}

export default Error
