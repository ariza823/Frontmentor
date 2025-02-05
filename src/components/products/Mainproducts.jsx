import Mainimagens from "@/Components/Products/Col-images/Mainimagens";
import Detailsproduct from "@/Components/Products/Coldetails/Detailsproduct";


const Mainproducts = () =>{
    return (
        <main className="grid grid-cols-1 items-center gap-8 md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:container md:grid-cols-2">
            <Mainimagens />
            <Detailsproduct />
            
       
        </main>
    );
};
export default Mainproducts;