
import Logosneakes from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import CarIcon from "./icons/CarIcon";
import { useState } from "react";
import Op from "./products/Op";

const Navbar = () => {

    const [navClass, setNavClass] = useState(false);

   
    return (
        <header className="container mx-auto flex 
        items-center gap-8 p-4 md:p-0">
            
            <button className="md:hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0" onClick=
            {()=>setNavClass(true)}>
               <MenuIcon />  
            </button> 
            <img 
            src = {Logosneakes} 
            alt="Logo sneakers" 
            className="mr-auto mb-1 h-5 md:mr-0"
            />
            <nav className= {`${navClass ? "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0":"hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"}`}>
                <button className="mb-12 md:hidden"  onClick=
                {()=>setNavClass(false)}>
                    <CloseIcon />
                </button>
                <Op text="colecciones" />
                <Op text="Hombre" />
                <Op text="Mujer" />
                <Op text="Acerca de" />
                <Op text="contacto" />
            </nav>
            <div className="flex gap-4">
                <button>
                    <CarIcon />
                </button>

                <img src= {Avatar} alt= ""
                className="w-10"/>
            </div>    
        </header>
 

    );

};

export default Navbar
