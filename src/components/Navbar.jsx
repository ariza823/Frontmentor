import { useContext, useState } from "react"; 

import Logosneakes from "@/assets/images/logo.svg"; 
import Avatar from "@/assets/images/image-avatar.png"; 

import MenuIcon from "@/components/icons/MenuIcon"; 
import CloseIcon from "@/components/icons/CloseIcon"; 
import CarIcon from "@/components/icons/CarIcon";

import Op from "@/components/Products/Op"; 

import CartDetails from "@/components/Products/Coldetails/CartDetails";
import { useCartDetails } from "@/Context/useCartDetails";

const Navbar = () => {
  const { totalQuantityProduct } = useContext(useCartDetails);
  const [navClass, setNavClass] = useState(false); // Menú oculto por defecto
  const [isOpenMenucart, setDetailsCart] = useState(false);

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-10 p-4 md:p-0">
        {/* Botón para mostrar el menú en pantallas pequeñas */}
        <button
          className="md:hidden font-bold"
          onClick={() => setNavClass(true)} // Abre el menú
        >
          <MenuIcon /> 
        </button>

        {/* Logo */}
        <img
          src={Logosneakes} 
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />

        {/* Menú de navegación */}
        <nav
          className={`${
            navClass
              ? "absolute top-0 left-0 flex h-screen w-4/5 flex-col gap-y-6 bg-white p-8 font-bold z-50 md:static md:flex md:flex-row md:gap-4 md:p-0"
              : "hidden font-bold md:flex md:flex-row md:gap-4 md:p-0 "
          }`}
        >
          {/* Botón para cerrar el menú en pantallas pequeñas */}
          <button className="mb-12 md:hidden" onClick={() => setNavClass(false)}>
            <CloseIcon />
          </button>

          <Op text="colecciones" />
          <Op text="Hombre" />
          <Op text="Mujer" />
          <Op text="Info" />
          <Op text="contacto" />
        </nav>

        {/* Carrito y avatar - Alineados a la derecha */}
        <div className="flex gap-4 ml-auto">
          <button onClick={() => setDetailsCart(!isOpenMenucart)} className="relative">
            <CarIcon />
            <span className="right-0 absolute top-0 translate-x-1 rounded-md bg-orange-primary px-1 text-xs font-bold text-white">
              {totalQuantityProduct}
            </span>
          </button>

          <img
            src={Avatar}
            alt="Avatar"
            className="w-10 rounded-full hover:border-2 hover:border-orange-500 hover:shadow-lg transition-all duration-200"
          />
          
          {/* Detalles del carrito */}
          {isOpenMenucart && <CartDetails />}
        </div>
      </header>

      <span className="container mx-auto hidden h-[2px] w-full md:block bg-gray-200"></span>
    </>
  );
};

export default Navbar;
