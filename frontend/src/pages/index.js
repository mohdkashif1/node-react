import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
 

export default function Home() {
  const [products,setProducts]=useState()

  const myApi=async()=>{
    const {data} = await axios.get("https://dummyjson.com/products");

    console.log(setProducts(data.products))
  }


  useEffect(()=>{
    myApi()
  },[])
  
  return (
    <>
     {products?.map((item)=>{
      return <div className="productCard">
        <div className="cardBody">
        <img src={item.images[0]}/>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        </div>
      </div>
     })}

    </>
  );
}
