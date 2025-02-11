
import Navbar from "./Components/Navbar";
import Mainproducts from "@/Components/Products/Mainproducts";
import CartDetailsProvider from "@/context/Usecart";


const App = () => {
    return (
        <>
        <CartDetailsProvider>
           <Navbar />
           <Mainproducts />
        </CartDetailsProvider>
        </>
    );
  };
  
  export default App;