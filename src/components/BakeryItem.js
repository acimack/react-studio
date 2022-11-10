// TODO: create a component that displays a single bakery item

// import { getImageUrl } from './utils.js';
import React from "react";
import { Button } from '@mui/material';

export function BakeryItem({ name, description, price, image, item, add }) {
  return (
    <div className="BakeryItem bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex flex-col">
     <div>
      <img
            // className="avatar"
            src={image}
            alt={name}
            width={"100px"}
            height={"100px"}
          />
      </div>
      
      <div className="item-des">
        <h4>{name}</h4>
          <h6>{description}</h6>
          <div className="addToCart flex items-center justify-between">
          <h5>{price}</h5>
            <Button onClick={()=>{add(item)}}>Add to Cart</Button>
          </div>
      </div>
          
    </div>
  );
}

