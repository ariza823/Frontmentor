import { useEffect, useRef, useState } from "react";
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
    const [index, setIndex] = useState(0);  // Estado para manejar la imagen que está activa en el slider

    // useEffect para ocultar los botones de navegación en pantallas grandes cuando el modal está cerrado
    useEffect(() => {
        // toggle de clase 'md:hidden' en btnSlider dependiendo si el modal está abierto o cerrado
        btnSlider.current?.classList.toggle("md:hidden", !isOpenModal);
    }, [isOpenModal]);  // Dependencia: se ejecuta cada vez que cambia el valor de isOpenModal

    // Función para avanzar a la siguiente imagen en el slider
    const handleClickNext = () => {
        setIndex((prevIndex) => (prevIndex === ARRAY_IMGS.length - 1 ? 0 : prevIndex + 1));  // Si llegamos al final, volvemos a la primera imagen
    };

    // Función para retroceder a la imagen anterior en el slider
    const handleClickPrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? ARRAY_IMGS.length - 1 : prevIndex - 1));  // Si estamos en la primera imagen, vamos a la última
    };

    return (
        <section {...props}>
            
            {isOpenModal && (
                <button 
                    onClick={handleCloseModal}  // Llama a la función handleCloseModal cuando se hace clic
                    className="md:col-span-4 ml-auto text-right"
                >
                    <CloseIcon />  {/* Icono de cerrar */}
                </button>
            )}

            {/* Contenedor de la imagen principal que se muestra en el modal */}
            <div className="col-span-4 relative">
                <img 
                    src={ARRAY_IMGS[index]}   // Muestra la imagen activa del slider
                    alt="" 
                    className="aspect-[16/12] w-full md:aspect-[25/20] md:rounded-md"  // Controla el aspecto de la imagen y sus bordes redondeados
                />
                {/* Contenedor de los botones de navegación, solo visible en pantallas pequeñas */}
                <div 
                    ref={btnSlider} 
                    className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-4 md:hidden"  // Los botones se posicionan al centro verticalmente
                >
                    <button 
                        className="grid place-items-center h-10 w-10 rounded-full bg-white"  // Estilo del botón anterior
                        onClick={handleClickPrev}  // Llama a la función handleClickPrev cuando se hace clic
                    >
                        <PrevIcon />  {/* Icono de la flecha hacia atrás */}
                    </button>
                    <button 
                        className="grid h-10 w-10 place-items-center rounded-full bg-white"  // Estilo del botón siguiente
                        onClick={handleClickNext}  // Llama a la función handleClickNext cuando se hace clic
                    >
                        <NextIcon />  {/* Icono de la flecha hacia adelante */}
                    </button>
                </div>
            </div>

            {/* Muestra las miniaturas de las imágenes para la selección rápida */}
            {ARRAY_IMG_SMALL.map((smallImg, indexSmall) => (
                <div 
                    key={indexSmall}  // Asigna una clave única para cada imagen
                    onClick={() => setIndex(indexSmall)}  // Cambia la imagen activa al hacer clic
                    className="relative overflow-hidden rounded-md cursor-pointer"  // Estilo para las miniaturas
                >
                    <img 
                        src={smallImg} 
                        alt="" 
                        className="hidden md:block md:rounded-md"  // Las miniaturas solo se muestran en pantallas medianas o más grandes
                    />
                    {/* Efecto hover semitransparente para las miniaturas y resaltar la miniatura activa */}
                    <span 
                        className={`absolute top-0 h-full w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.5)] ${indexSmall === index ? "h-full w-full bg-[rgba(255,255,255,0.5)]" : ""}`}  
                    />
                    {/* Nuevo hover para resaltar el borde */}
                    <span
                        className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 border-2 ${indexSmall === index ? 'border-orange-primary' : 'border-transparent'} rounded-md`} 
                    />
                </div>
            ))}
        </section>
    );
};
