// TODO: create a component that displays a single bakery item

// import { getImageUrl } from './utils.js';
import React from "react";
// import { Button, Container } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function BakeryItem({ name, description, price, image, item, add }) {
  return (
    // <Container className="BakeryItem bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex flex-col">
    //   <img
    //     // className="avatar"
    //     src={image}
    //     alt={name}
    //     width="inherit"
    //   />
    //   <h4>{name}</h4>
    //   <h6>{description}</h6>
    //   <h5>{price}</h5>
    //   <Button onClick={()=>{add(item)}}>Add to Cart</Button>
    // </Container>

    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Card.Text>
          <b>{price}</b>
        </Card.Text>
        <Button onClick={()=>{add(item)}}>Add to Cart</Button>
      </Card.Body>
    </Card>

  );
}

