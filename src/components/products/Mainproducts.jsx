import Mainimagens from "@/Components/Products/Col-images/Mainimagens";
import Detailsproduct from "@/Components/Products/Coldetails/Detailsproduct";
//Imagenes grandes
import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'
//Imagenes pequeñas
import	imgproductsmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import	imgproductsmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import	imgproductsmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import	imgproductsmall4 from '@/assets/images/image-product-4-thumbnail.jpg'

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const ARRAY_IMG_SMALL = [imgproductsmall1, imgproductsmall2, imgproductsmall3, imgproductsmall4]

const Mainproducts = () =>{
    return (
        <main className="grid grid-cols-1 items-center gap-8 md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:container md:grid-cols-2">
            <Mainimagens 
            ARRAY_IMGS = {ARRAY_IMGS} 
            ARRAY_IMG_SMALL = {ARRAY_IMG_SMALL}
            />
            <Detailsproduct />
            
       
        </main>
    );
};
export default Mainproducts;