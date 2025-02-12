
import Navbar from "./Components/Navbar";
import Mainproducts from "@/Components/Products/Mainproducts";
import CartDetailsProvider from "@/Context/useCartDetails"
const App = () => {
  return (
    
    <CartDetailsProvider>
    <Navbar />
    <Mainproducts />
    </CartDetailsProvider>
  
  );
};

export default App;
