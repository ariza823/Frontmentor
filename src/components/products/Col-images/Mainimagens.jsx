import SlideProducts from "@/Components/Products/Col-images/SlideProducts"; 
import { useState } from "react"; 

export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
  // Estado para controlar si el modal está abierto
  const [isOpenModal, SetOpenModal] = useState(false);

  // Función para abrir el modal (solo en pantallas grandes)
  const handleOpenModal = () =>
    window.innerWidth > 767 && SetOpenModal(true); 

  // Función para cerrar el modal
  const handleCloseModal = () => SetOpenModal(false); 

  // Asegurarse de que ARRAY_IMGS y ARRAY_IMG_SMALL no estén vacíos
  if (!ARRAY_IMGS || !ARRAY_IMG_SMALL || ARRAY_IMGS.length === 0 || ARRAY_IMG_SMALL.length === 0) {
    return <div>No hay imágenes para mostrar.</div>;  
  }

  return (
    <>
      {/* Sección con los productos */}
      <SlideProducts
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        className="grid md:grid-cols-4 md:gap-4" //  pantallas medianas y grandes
        onClick={handleOpenModal} 
      />

      {/* Modal que se muestra si isOpenModal es verdadero */}
      {isOpenModal && (
        <>
          <SlideProducts
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
            isOpenModal={isOpenModal}
            className="hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4" 
            handleCloseModal={handleCloseModal} // Cierra el modal
          />
          
          
          <span
            className="fixed top-0 left-0 h-full w-full bg-black/70 "
            onClick={handleCloseModal} 
          ></span>
        </>
      )}
    </>
  );
};
