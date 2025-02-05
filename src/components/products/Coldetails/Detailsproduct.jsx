import CarIcon from "@/Components/icons/CarIcon.jsx";

export default () => { 
    return (
        <section className="container mx-auto px-4">
            <p className="mb-3 font-bold uppercase text-orange-primary tracking-wide">Sneaker Company</p>
            <h2 className="mb-4 text-3xl font-bold ">
                Fall Limited Edition Sneaker</h2>
            <p className="mb-5 text-dark.grayish-blue">
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-1">                
                <span className="text-3xl">$125.00</span>
                <span className=" mr-auto rounded-md bg-black py-1 px-2 text-white">
                    50%
                </span>
                <span className="text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left ">
                    $250.00
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4  font-bold md:grid-cols-[1fr_1.9fr]">
                <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-100 py-2 px-5 pb-3 md:col-span-1">
                    <button className="text-3xl text-orange-primary">-</button>
                    <span text-xl>0</span>
                    <button className="text-3xl text-orange-primary">+</button>
                    </div>
                    <button className="col-span-3 flex gap-x-3 items-center  rounded-md bg-orange-primary p-3 justify-center text-black transition-all hover:bg-orange-600 md:col-span-1">
                        <CarIcon fill="#000" className="fill-black"/>
                        <span>Add to car</span>
                        </button>
            </div>
        </section>
    );
};


