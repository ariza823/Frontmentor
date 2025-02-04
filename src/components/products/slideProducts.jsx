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
//Iconos
import PrevIcon from '../icons/PrevIcon'
import NextIcon from '../icons/nextIcon'
import { useState } from 'react'

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

export default () => {

    const [index, setIndex] = useState(0)

const handleClickNext =() => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index +1);
};
const handleClickPrev =() => {
    index === 0 ?  setIndex(ARRAY_IMGS.length - 1) :
    setIndex(index - 1);
};

    return(

     <section className="grid md:grid-cols-4 md:gap-4">
        <div className='col-span-4 relative'>
            <img src ={ARRAY_IMGS[index]} alt="" className='aspect-[16/12] w-full'/>
           <div className='absolute top-1/2 left-0 w-full 
           -translate-y-1/2 flex justify-between px-4'>
            <button className='grid place-items-center h-10 w-10 
            rounded-full bg-white'
             onClick={handleClickPrev}>
            <PrevIcon/>
           </button>
           <button className='grid place-items-center h-10 w-10 
           rounded-full bg-white'
           onClick={handleClickNext}>
                <NextIcon />
           </button >
           </div>
        </div>

        <img src={imgproductsmall1} alt="" className='hidden md:block'/>
        <img src={imgproductsmall2} alt="" className='hidden md:block'/>
        <img src={imgproductsmall3} alt="" className='hidden md:block'/>
        <img src={imgproductsmall4} alt="" className='hidden md:block'/>
       
    </section>

    );
};