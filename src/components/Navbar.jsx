// Importación de recursos como imágenes y componentes
import Logosneakes from "@/assets/images/logo.svg"; 
import Avatar from "@/assets/images/image-avatar.png"; 
import MenuIcon from "@/components/icons/MenuIcon"; 
import CloseIcon from "@/components/icons/CloseIcon"; 
import CarIcon from "./icons/CarIcon";
import { useState } from "react"; 
import Op from "./Products/Op"; 

const Navbar = () => {
  // Estado que controla si el menú está visible o no
  const [navClass, setNavClass] = useState(false); // Inicialmente el menú está oculto

  return (
    <header className="container relative mx-auto flex items-center gap-8 p-4 md:p-0">
      {/* Botón para mostrar el menú en pantallas pequeñas */}
      <button
        className="md:hidden font-bold"  // 'md:hidden' asegura que este botón solo se muestre en pantallas pequeñas
        onClick={() => setNavClass(true)}  // Cambia el estado 'navClass' a 'true' para mostrar el menú
      >
        <MenuIcon />  {/* Se renderiza el ícono del menú */}
      </button>

      {/* Logo */}
      <img
        src={Logosneakes}  // Muestra el logo de la tienda
        alt="Logo sneakers"  // Texto alternativo para accesibilidad
        className="mr-auto mb-1 h-5 md:mr-0"  // Estilos de márgenes y tamaño para el logo
      />

      {/* Menú de navegación */}
      <nav
        className={`${
          navClass
            ? "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-6 bg-white p-8 font-bold z-50 md:static md:flex md:flex-row md:gap-4 md:p-0"
            : "hidden font-bold md:flex md:flex-row md:gap-4 md:p-0"  // El menú es visible si 'navClass' es true, de lo contrario se oculta
        }`}
      >
        {/* Botón para cerrar el menú en pantallas pequeñas */}
        <button className="mb-12 md:hidden" onClick={() => setNavClass(false)}>
          <CloseIcon />  
        </button>
      
        <Op text="colecciones" />
        <Op text="Hombre" />
        <Op text="Mujer" />
        <Op text="Acerca de" />
        <Op text="contacto" />
      </nav>

    
      <div className="flex gap-4 ml-auto">
        <button>
          <CarIcon />  
        </button>
       
        <img 
          src={Avatar}  
          alt="Avatar"  
          className="w-10 rounded-full hover:border-2 hover:border-orange-500 hover:shadow-lg transition-all duration-200" 
          
        />

    <section className="absolute top-[125%] left-0 z-10 w-full">
        <div className="mx-4 bg-white rounded-md"></div>
        <h4 className="px-6 py-8 font-bold text-lg">Cart</h4>
        <hr />
        <div>
            <img src="" alt=""/>
            <div className="grid grid-cols-[1fr_4fr_1fr] px-6 py-8 ">
                Lorem ipsum, dolor sit 
            </div>
            <button>Delete</button>
        </div>

    </section>
      </div>
    </header>
  );
};

export default Navbar;
