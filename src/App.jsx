import { useState, useEffect } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"

function App() {

    // Hooks: se ponen al inicio, nunca dentro de condicionales
    // UseState: [state, función que modifica al state] = useState(valor inicial)
    const [auth, setAuth] = useState(true)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    //useEffect: ejecutar componte cuando  esta listo (API o localstorage)
    // tiene callback (funcion que se ejecuta cuando componente esta listo)
    // tiene array de dependnecias: se ejecuta cuando los elementos del array estan lito
    useEffect(() => {
      console.log('Componente listo')
    }, [])

    return (
    <>

    <Header/>

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            <Guitar/>
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App