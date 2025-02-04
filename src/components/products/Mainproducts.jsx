import Detailsproduct from "@/components/products/Detailsproduct"
import SlideProducts from "@/components/products/slideProducts";

const Mainproducts = () =>{
    return (
        <main className="grid grid-cols-1 items-center gap-8 md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:container md:grid-cols-2">
            <SlideProducts/>
            <Detailsproduct />
       
        </main>
    );
};
export default Mainproducts;