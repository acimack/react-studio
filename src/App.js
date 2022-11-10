import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";
import { Button } from '@mui/material';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [currCart, setCurrCart] = useState({});
  const [price, setPrice] = useState(0);

  function addToCart(item) {
    // setCurrCart(currCart.concat(item));
    
    if (currCart[item.name] == null) {
      currCart[item.name] = 1;
    }
    else {
      currCart[item.name] = currCart[item.name] + 1;
    }
    setPrice(price + item.price)
    console.log(currCart);
  }

  return (
    <div className="App flex flex-col items-center">
      <div className="flex w-full sm:max-w-[1280px]"> 
      <div className="flex flex-col w-2/3 p-8 gap-8">
        <div className="flex flex-col w-2/3 p-8 gap-8">
          <h1>My Bakery</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bakeryData.map((item, index) => (
            <BakeryItem 
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              add={addToCart}
              item={item}
            ></BakeryItem>
          ))}
        </div>

      </div>
    </div>
    <div className="Cart">
      <h2>Cart</h2>
      {
        Object.keys(currCart).map(function(key, index) {
          return <p>{currCart[key]}x {key}</p>;
        })
      }
      <h3>Price: {price}</h3>
      <Button>Checkout</Button>
    </div>
    </div>
  );
}

export default App;
