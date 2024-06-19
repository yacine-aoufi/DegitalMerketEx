"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-carts";
import { Product } from "@/payload-types";

const AddToCart = ({product}:{product:Product}) => {

    const{addItem}=useCart()
  const [isSuccess, SetIsSuccess] = useState<Boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      SetIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [isSuccess]);

  return (
    <Button onClick={()=>{
        
        addItem(product)
        SetIsSuccess(true)}} size={"lg"} className="w-full">
{isSuccess? "Added!":"Add to cart"}
    </Button>
  );
};

export default AddToCart;
