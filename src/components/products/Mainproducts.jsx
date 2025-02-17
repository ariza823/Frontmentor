import Mainimagens from "@/Components/Products/Col-images/Mainimagens";  
import Detailsproduct from "@/Components/Products/Coldetails/Detailsproduct"; 

// Importación de las imágenes grandes
import imgProduct1 from '@/assets/images/image-product-1.jpg';
import imgProduct2 from '@/assets/images/image-product-2.jpg';
import imgProduct3 from '@/assets/images/image-product-3.jpg';
import imgProduct4 from '@/assets/images/image-product-4.jpg';

// Importación de las imágenes pequeñas 
import imgproductsmall1 from '@/assets/images/image-product-1-thumbnail.jpg';
import imgproductsmall2 from '@/assets/images/image-product-2-thumbnail.jpg';
import imgproductsmall3 from '@/assets/images/image-product-3-thumbnail.jpg';
import imgproductsmall4 from '@/assets/images/image-product-4-thumbnail.jpg';

// Se crea un array con las imágenes grandes, que se utilizarán en el componente 'Mainimagens'
const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

// Se crea un array con las imágenes pequeñas, que se utilizarán en el componente 'Mainimagens' para mostrar miniaturas
const ARRAY_IMG_SMALL = [imgproductsmall1, imgproductsmall2, imgproductsmall3, imgproductsmall4];

// Definición del objeto de producto, que contiene toda la información relevante del producto.
const objetProduct = {
    id: 1,  
    title: "Fall Limited Edition Sneakers",  
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",  // Descripción del producto
    subtitle: "SNEAKER COMPANY",  
    price: 250,  
    discount: 0.5,  
    imagesMain: ARRAY_IMGS,  
    imagesSmall: ARRAY_IMG_SMALL 
};

const Mainproducts = () => {
    return (
        // Estructura principal del componente 'Mainproducts', usando una grilla CSS para el diseño responsivo
        <main className="grid grid-cols-1 items-center gap-8 md:pt-12 md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:container md:grid-cols-2">
            
            {/* Componente 'Mainimagens' que se encarga de mostrar las imágenes grandes y pequeñas del producto */}
            <Mainimagens 
                ARRAY_IMGS={objetProduct.imagesMain}  // Pasa las imágenes grandes
                ARRAY_IMG_SMALL={objetProduct.imagesSmall}  // Pasa las imágenes pequeñas
            />
            
            {/* Componente 'Detailsproduct' que muestra los detalles del producto */}
            <Detailsproduct objetProduct={objetProduct} />  {/* Pasa el objeto del producto con toda la información */}
        </main>
    );
};

export default Mainproducts;  // Exporta el componente 'Mainproducts' para su uso en otros lugares de la aplicación.
