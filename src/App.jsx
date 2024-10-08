/* eslint-disable no-unused-vars */
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
	const [data, setData] = useState(db) // normalmente se inicializa el state con vacío/false/etc...
    const [cart, setCart] = useState([]) // state para el carrito de compras

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    // función para agrega al carrito
    function addToCart(item) {

        // si el ítem no existe (-1), si existe (1er índice donde aparece)
        const itemExists = cart.findIndex((currentItem) => currentItem.id === item.id)

        if(itemExists >= 0) { // ítem sí está en el carrito

            // si ya se excedió la cantidad máxima, no ejecutar nada
            if( cart[itemExists].quantity >= MAX_ITEMS) return

            const updatedCart = [...cart] // copiar state a nueva variable
            updatedCart[itemExists].quantity++ // actualizar cantidad del ítem agregado
            setCart(updatedCart) //agregar el item (con cantidad actualizada) al state
        }
        else {
            item.quantity = 1 // agrego propiedad nueva de cantidad
            setCart([...cart, item]) // actualizo state con nuevo ítem
        }
    }

    // setCart( (guitarra) => filtra el state y trae sólo los items con id diferente al parámetro)
    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter(guitar => guitar.id !== id))
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item, // retorna el item actual
                    quantity: item.quantity + 1 // y a ese item le modifica su cantidad
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,    // retorna el item actual
                    quantity: item.quantity - 1 // y a ese item le modifica su cantidad
                }
            }
            return item // a los items que no modifico cantidad, los dejo iguales
        })
        setCart(updatedCart) // actualizo el state de cart
    }

    function clearCart() {
        setCart([])
    }

    return (
    <>
    <Header
        cart = {cart} // pasar el state cart (carrito de compras)
        removeFromCart = {removeFromCart}
        increaseQuantity = {increaseQuantity}
        decreaseQuantity = {decreaseQuantity}
        clearCart = {clearCart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
			{data.map((guitar) => (
					<Guitar
                        //prop = {valor} (mismo nombre)
                        key={guitar.id} // Prop ID (obligatorio al usar .map)
						guitar = {guitar} // cada elemento de 'data' que se itera
                        setCart = {setCart} // al pasar setState se pasa también el state
                        addToCart = {addToCart} // función para agregar al carrito
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