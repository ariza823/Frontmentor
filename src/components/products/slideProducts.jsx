
import imgProduct1 from '@/assets/images/image-product-1.jpg'
import	imgproductsmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import	imgproductsmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import	imgproductsmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import	imgproductsmall4 from '@/assets/images/image-product-4-thumbnail.jpg'
import PrevIcon from '../icons/PrevIcon'
import NextIcon from '../icons/nextIcon'

export default () => {
    return(

     <section className="grid md:grid-cols-4 md:gap-4">
        <div className='col-span-4'>
            <img src ={imgProduct1} alt="" className='aspect-[16/12]'/>
           <div>
            <PrevIcon/>
           </div>
           <div>
            <NextIcon />
           </div>
        </div>

        <img src={imgproductsmall1} alt="" className='hidden md:block'/>
        <img src={imgproductsmall2} alt="" className='hidden md:block'/>
        <img src={imgproductsmall3} alt="" className='hidden md:block'/>
        <img src={imgproductsmall4} alt="" className='hidden md:block'/>
       
    </section>

    );
};