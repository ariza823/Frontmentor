import Mainproducts from "@/components/products/Detailsproduc";

const Mainproducts = () => {
    return(
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <section>Galeria de imagenes</section>
            <Detailsproduct />
        </main>
    );
};

export default Mainproducts;