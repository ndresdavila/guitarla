import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/db"

function App() {
    // Hooks: se ponen al inicio, nunca dentro de condicionales

    // - useState: [state, función que modifica al state] = useState(valor inicial)

    // - useEffect: ejecutar componte cuando está listo (API o localstorage), tiene:
        // callback: función (arrow) que se ejecuta cuando una dependencia cambia su state
        // array de dependencias: va a estar escuchando los cambios de estas variables/states
        // si array de dependencia está vacío: se ejecuta 1 sola vez cuando el componente está listo
	
    // Props: compartir información entre componentes (padre->hijo): <Componente prop={valor} />

	// inicio data como un componente vacío
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState(db) // normalmente se inicializa el state con vacío/false/etc...
    const [cart, setCart] = useState([]) // state para el carrito de compras
	
    // agrega al carrito: lógica para manejar cantidad de items repetidos, etc
    function addToCart(item) {

        //verificar si el item existe: si no existe (-1) si sí existe, retorna el primer índice donde aparece
        const itemExists = cart.findIndex((currentItem) => currentItem.id === item.id)

        if(itemExists >= 0) { // existe en el carrito
            const updatedCart = [...cart] // copia del state
            updatedCart[itemExists].quantity++ // actualizar cantidad
            setCart(updatedCart) //agregar el item con cantidad actualizada al state
        }
        else {
            item.quantity = 1 // agregando propiedad nueva mostrando la cantidad
            setCart([...cart, item]) // agrega el nuevo item al carrito
        }
    }

    return (
    <>
    <Header
        cart = {cart}    
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
			{data.map((guitar) => (
					<Guitar
                        //prop = valor (mismo nombre)
                        key={guitar.id} // SIEMPRE debo pasar como prop un id cuando uso MAP
						guitar = {guitar} 
                        setCart = {setCart}
                        addToCart = {addToCart}
					/>
				)
			)}
			
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