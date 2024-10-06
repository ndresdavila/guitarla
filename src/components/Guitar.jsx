// eslint-disable-next-line react/prop-types
export default function Guitar({guitar, addToCart}) {
    
    // Props: propiedades que salen del componente padre (App)
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { id, name, image, description, price } = guitar

    // Obsoleto: no es necesario crear una función adicional
    // const handleClick = (guitar) => {
    //     setCart([...cart, guitar]) // al cart, le seteo con el cart anterior + el elemento nuevo
    // }

    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        //usar arrow function para que la función SOLO se llame en evento, no automáticamente
                        // puedo no pasar cart como prop, sino usar un parámetro de setCart (automáticamente será cart) y no definir ninguna función handleClick adicional
                        onClick={() => addToCart(guitar)}
                    >Agregar al Carrito</button>
                </div>
            </div>
    )
}