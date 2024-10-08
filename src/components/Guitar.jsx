/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// Props: propiedades que salen del componente padre (App)
export default function Guitar({guitar, addToCart}) { 
    
    // dereferencio los valores del objeto guitar
    const { id, name, image, description, price } = guitar

    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            {/* Imagen de la guitarra */}
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>

            <div className="col-8">
                {/* Nombre de la guitarra */}
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>

                {/* Descripción de la guitarra */}
                <p>{description}</p>
    
                {/* Precio de la guitarra */}
                <p className="fw-black text-primary fs-3">${price}</p>

                {/* Botón para agregar al carrito */}
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    //arrow function para que la función SOLO se llame en evento, no automáticamente
                    onClick={() => addToCart(guitar)} // en evento de click: llamo a función con valor (ambos son props)
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}