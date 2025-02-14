import { useEffect, useRef, useState } from "react";  // Hooks de React para manejar el estado y efectos secundarios
import PrevIcon from '@/Components/icons/PrevIcon.jsx';  
import NextIcon from '@/Components/icons/NextIcon.jsx'; 
import CloseIcon from '@/Components/icons/CloseIcon';  

export default ({ 
    ARRAY_IMGS = [],          
    ARRAY_IMG_SMALL = [],      
    isOpenModal = false,       
    handleCloseModal = null,   
    handleOpenModal = () => {}, 
    ...props                    
}) => {
    const btnSlider = useRef(null);  // Referencia al contenedor de los botones de navegación
    const [index, setIndex] = useState(0);  

    // useEffect para ocultar los botones de navegación en pantallas grandes cuando el modal está cerrado
    useEffect(() => {
        
        btnSlider.current?.classList.toggle("md:hidden", !isOpenModal);
    }, [isOpenModal]);  // Dependencia: se ejecuta cada vez que cambia el valor de isOpenModal

    
    const handleClickNext = () => {
        setIndex((prevIndex) => (prevIndex === ARRAY_IMGS.length - 1 ? 0 : prevIndex + 1));  // Si llegamos al final, volvemos a la primera imagen
    };

    
    const handleClickPrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? ARRAY_IMGS.length - 1 : prevIndex - 1));  // Si estamos en la primera imagen, vamos a la última
    };

    return (
        <section {...props}> 
            
            {isOpenModal && (
                <button 
                    onClick={handleCloseModal}  
                    className="md:col-span-4 ml-auto text-right"
                >
                    <CloseIcon />  
                </button>
            )}

            
            <div className="col-span-4 relative">
                <img 
                    src={ARRAY_IMGS[index]}   
                    alt="" 
                    className="aspect-[16/12] w-full md:aspect-[25/20] md:rounded-md"  
                />
                {/* Contenedor de los botones de navegación, solo visible en pantallas pequeñas */}
                <div 
                    ref={btnSlider} 
                    className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-4 md:hidden"  // Los botones se posicionan al centro verticalmente
                >
                    <button 
                        className="grid place-items-center h-10 w-10 rounded-full bg-white"  
                        onClick={handleClickPrev}  
                    >
                        <PrevIcon />  
                    </button>
                    <button 
                        className="grid h-10 w-10 place-items-center rounded-full bg-white"  
                        onClick={handleClickNext}  
                    >
                        <NextIcon />  
                    </button>
                </div>
            </div>

            
            {ARRAY_IMG_SMALL.map((smallImg, indexSmall) => (
                <div 
                    key={indexSmall}  
                    onClick={() => setIndex(indexSmall)}  
                    className="relative overflow-hidden rounded-md cursor-pointer" 
                >
                    <img 
                        src={smallImg} 
                        alt="" 
                        className="hidden md:block md:rounded-md"  
                    />
                   
                    <span 
                        className={`absolute top-0 h-full w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.5)] ${indexSmall === index ? "h-full w-full bg-[rgba(255,255,255,0.5)]" : ""}`}  
                    />
                    
                    <span
                        className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 border-2 ${indexSmall === index ? 'border-orange-primary' : 'border-transparent'} rounded-md`} 
                    />
                </div>
            ))}
        </section>
    );
};
