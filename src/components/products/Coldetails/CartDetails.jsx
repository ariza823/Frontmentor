import { useContext } from "react";
import { useCartDetails } from "@/Context/useCartDetails";
import DeleteIcon from "@/components/icons/DeleteIcon";

export default () => {
  const { CarProducts, deleteCartProducts } = useContext(useCartDetails);

  const handleCheckout = () => {
    // Mostrar la alerta de compra realizada
    alert("Compra realizada");

    // Borrar todos los productos del carrito
    CarProducts.forEach((product) => {
      deleteCartProducts(product.id);
    });
  };

  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-full md:top-full md:max-w-lg md:-translate-x-full">
      <div className="mx-4 rounded-md bg-white shadow-md">
        <h4 className="px-6 py-4 text-lg font-bold">Cart</h4>
        <hr />

        {CarProducts.length === 0 && (
          <p className="py-16 text-center">Your cart is empty</p>
        )}

        {CarProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4"
          >
            <img src={product.img} alt={product.title} className="rounded-md" />
            <div>
              <h6>{product.subtitle}</h6>
              <p>
                <span>
                  ${product.discountPrice} x {product.quantity}
                </span>{" "}
                <span className="font-bold">
                  ${(product.discountPrice * product.quantity).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              className="ml-auto"
              onClick={() => deleteCartProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}

        {CarProducts.length !== 0 && (
          <div className="px-6 pb-8">
            <button
              className="w-full rounded-md bg-orange-primary py-4 text-white transition-all hover:bg-orange-600"
              onClick={handleCheckout} // Llamamos a la función handleCheckout
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
