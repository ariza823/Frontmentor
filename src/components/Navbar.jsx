
import Logosneakes from "@/assets/images/logo.svg";

import Avatar from "@/assets/images/image-avatar.png";

import Icon from "@/components/icons/icon";
const Navbar = () => {
    return (
        <header>
            <img src = {Logosneakes} alt=""/>
            <nav>
                <a href="#">colecciones</a>
                <a href="#">Hombre</a> 
                <a href="#">Mujer</a>                            <a href="#">Mujer</a>
                <a href="#">Acerca de</a>
                <a href="#">Contacto</a>
            </nav>
            <div>
                <button>Carrito</button>
                <img src= {Avatar} alt= ""/>
            </div>    
        </header>
    )

};

export default Navbar
