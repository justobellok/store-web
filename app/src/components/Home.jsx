import "./style/home.css"
import { IoMdArrowDown, IoMdNotifications } from "react-icons/io";

const Home = () => {


    return ( 
        <>

          <a href="#">
          <IoMdNotifications className="noti" />
            </a>  
         <main className="main">
         <div>
                <h1>Shopping</h1>
                <h2>Realiza tus compras de manera facil</h2>
         </div>
        <div className="btn">
            <a href="#">Mas informacion</a>
            <a href="#">Sucursales</a>
        </div>
            </main> 
            <div className="row">
   <IoMdArrowDown className="rowDown"/>
            </div>

           
        </>
     );
}
 
export default Home;