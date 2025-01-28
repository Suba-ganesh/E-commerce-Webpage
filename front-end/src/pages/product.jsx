import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrum from "../components/Breadcrum/breadcrum";
import Productdisplay from "../components/Productdisplay/Productdisplay";
import Descriptionbox from "../components/DescriptionBox/descriptionbox";
import Relatedproducts from "../components/RelatedProducts/relatedproducts";



const Product =() => {

    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id=== Number(productId))
    return (<div>
        <Breadcrum product={product}/>
        <Productdisplay product={product}/>
        <Descriptionbox />
        <Relatedproducts />
        </div>);
}
export default Product;