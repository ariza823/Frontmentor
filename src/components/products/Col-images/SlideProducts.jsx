//Iconos
import PrevIcon from '@/Components/icons/PrevIcon.jsx';
import NextIcon from '@/Components/icons/NextIcon.jsx';
import CloseIcon from '@/Components/icons/CloseIcon';
import { useState } from 'react'




export default ({ 
    ARRAY_IMGS = [],
    ARRAY_IMG_SMALL = [], 
    isOpenModal = false,
    handleCloseModal = null,
    ...props}) => {

    const [index, setIndex] = useState(0)

const handleClickNext =() => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index +1);
};
const handleClickPrev =() => {
    index === 0 ?  setIndex(ARRAY_IMGS.length - 1) :
    setIndex(index - 1);
};

    return(

     <section {...props}>
        {isOpenModal && (
             <button 
             onClick={handleCloseModal}
             className='md:col-span-4 ml-auto text-right'
             > 
            <CloseIcon />
            </button>
        )}
       
        <div className='col-span-4 relative'>
            <img src ={ARRAY_IMGS[index]} alt="" className='aspect-[16/12] w-full md:aspect-[25/20] md:rounded-md'/>
           <div className='absolute top-1/2 left-0 w-full 
           -translate-y-1/2 flex justify-between px-4'>
            <button className='grid place-items-center h-10 w-10 
            rounded-full bg-white'
             onClick={handleClickPrev}>
            <PrevIcon/>
           </button>

           <button 
           className='grid h-10 w-10 place-items-center
           rounded-full bg-white'
           onClick={handleClickNext}>
                <NextIcon />
           </button>

           </div>
        </div>
        {
            ARRAY_IMG_SMALL.map(smallImg =>(
                <img 
                key={smallImg}
                src={smallImg} 
                alt="" 
                className='hidden md:block md:rounded-md'
                />  
            ))
        }

    </section>

    );
};