import CarIcon from "@/Components/icons/CarIcon.jsx";
import { useCartDetails } from '@/context/useCartDetails';
import { useContext, useState } from "react";

export default ({ objetProduct }) => {
    const { addCartProducts } = useContext(useCartDetails);
    const [count, setCount] = useState(0);  // Mantener el estado de la cantidad

    const handleAddToCart = () => {
        if (count > 0) {
            // Añadir al carrito, asegurando que el producto se agregue correctamente con título y subtítulo
            addCartProducts({
                img: objetProduct.imagesSmall[0],
                id: objetProduct.id,
                discountPrice: (
                    objetProduct.price *
                    (1 - objetProduct.discount)
                ).toFixed(2),
                title: objetProduct.title,
                subtitle: objetProduct.subtitle,  // Añadir subtítulo
                quantity: count,  // Pasar la cantidad seleccionada
            });
        }
    };

    return (
        <section className="container mx-auto px-4">
            <p className="mb-3 font-bold uppercase text-orange-primary tracking-wide"> 
                {objetProduct.subtitle}
            </p>
            <h2 className="mb-4 text-3xl font-bold ">
                {objetProduct.title}
            </h2>
            <p className="mb-5 text-dark.grayish-blue">
                {objetProduct.description}
            </p>
            <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-1">                
                <span className="text-3xl">
                    $ 
                    {(
                        objetProduct.price * 
                        (1 - objetProduct.discount)
                    ).toFixed(2)}
                </span>
                <span className="mr-auto rounded-md bg-black py-1 px-2 text-white">
                    {objetProduct.discount * 100}%
                </span>
                <span className="text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left ">
                    ${(objetProduct.price.toFixed(2))}
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.9fr]">
                <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-100 py-2 px-5 pb-3 md:col-span-1">
                    <button 
                        className="text-3xl text-orange-primary"
                        onClick={() => setCount(Math.max(0, count - 1))} // Prevenir que la cantidad sea negativa
                    >
                        -
                    </button>
                    <span className="text-xl">{count}</span>
                    <button 
                        className="text-3xl text-orange-primary"
                        onClick={() => setCount(count + 1)} // Incrementar la cantidad
                    >
                        +
                    </button>
                </div>
                <button 
                    className="col-span-3 flex gap-x-3 items-center rounded-md bg-orange-primary p-3 justify-center text-black transition-all hover:bg-orange-600 md:col-span-1"
                    onClick={handleAddToCart} // Añadir al carrito solo si count > 0
                >
                    <CarIcon fill="#000" className="fill-black" />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};
