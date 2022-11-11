import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";
// import { Button, Container } from '@mui/material';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
    <Container className="App flex-col items-center">
      <Row className="flex w-full sm:max-w-[1280px]"> 
      <h1>Blueno's Bakery</h1>
        <Col>
          <Row md={2}>
            {bakeryData.map((item, index) => (
              <Col md gap={3}>
                  <BakeryItem 
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    add={addToCart}
                    item={item}
                  ></BakeryItem>
              </Col>
            ))}
          </Row>
        </Col>
      <Col className="flex flex-col ml-4 w-1/3 shrink-0 p-8 sticky top-20 max-h-min">
        <h2>Cart</h2>
        <h4>Price: {price}</h4>
        {
          Object.keys(currCart).map(function(key, index) {
            return <p>{currCart[key]}x {key}</p>;
          })
        }
        <Button>Checkout</Button>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
