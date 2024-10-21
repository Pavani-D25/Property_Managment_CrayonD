import PricingComponent from "./components/PricingComponent/PricingComponent";
import Main from "./pages/Main/Main";
import Amenities from "./components/Amenities/Amenities";
import Discount from "./components/Discount/Discount";
const routes = [

{
  path:"/",
  element: (
    <Main />
  )
},
{
    path:"/pricingComponent",
    element: (
      <PricingComponent />
    )
}

];

export default routes;