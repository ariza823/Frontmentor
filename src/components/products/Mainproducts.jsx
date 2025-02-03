import Detailsproduct from "@/components/products/Detailsproduct"
import SlideProducts from "@/components/products/slideProducts";

const Mainproducts = () =>{
    return (
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SlideProducts/>
            <Detailsproduct />
       
        </main>
    );
};
export default Mainproducts;