import { useState, useEffect } from "react"
import "./style/producto.css"
import {FaShoppingBag} from "react-icons/fa"

const Productos = () => {

    const [productos, setProducts] = useState([])
    const [loadding, setLoadding] = useState(true)



    useEffect(() => {
        setTimeout(()=>{

            fetch('https://fakestoreapi.com/products')
         .then(response => response.json())
         .then(datos =>{
            setProducts(datos)
            setLoadding(false)

        }, 2000)
 
     })
    }, [])

    return ( 
        <div>

        {loadding? <strong className="loadding">Cargando...</strong> : 
            <article className="producto">
             
           {
             productos.map(producto => {
               return (
                 <div className="card">
                   <img src={producto.image} alt={producto.name} />
                   <strong>{producto.title}</strong>
                   <section className="add">
                   <p>$ {producto.price}</p>
                   <button>Agregar
                    <FaShoppingBag />
                   </button>
                   </section>
                   
                 </div>
               )
             })
           }
     </article>
           }

        </div>
    )
}

 
export default Productos;