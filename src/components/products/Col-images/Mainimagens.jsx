import SlideProducts from "@/Components/Products/Col-images/SlideProducts";
import { useState } from "react";


export default  ({ ARRAY_IMGS ,ARRAY_IMG_SMALL}) => {const [isOpenModal, SetOpenModal] = useState(false);

    const handleOpenModal = () => {
        SetOpenModal (true);
    };
    
    const handleCloseModal = () => {
        SetOpenModal (false);
    };

    return (
       <>
       
       <SlideProducts
        ARRAY_IMGS = {ARRAY_IMGS}
        ARRAY_IMG_SMALL = {ARRAY_IMG_SMALL}
        className="grid md:grid-cols-4 md:gap-4"
        onClick={handleOpenModal}
       /> 
       {isOpenModal && ( 
        <SlideProducts
        ARRAY_IMGS = {ARRAY_IMGS}
        ARRAY_IMG_SMALL = {ARRAY_IMG_SMALL}
        isOpenModal={isOpenModal}
        className="grid md:absolute md:top-1/2 md:left-1/2 md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-4"
        handleCloseModal={handleCloseModal}
        />
        
        
        )} 

       

        </>
    )
 }