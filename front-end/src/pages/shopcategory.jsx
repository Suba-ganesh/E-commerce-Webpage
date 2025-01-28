import React, { useContext } from "react";
import './CSS/Shopcategory.css';
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/item/item";


const Shopcategory =(props) => {

      const {all_product} = useContext(ShopContext);

    return (<div className="shop-category">
         <img className='shop-category-banner'src={props.banner} alt="" />
         <div className="shop-category-indexsort">
            <p>
                <span>Show 1-12</span>Out of 36 Products
            </p>
            <div className="shop-category-sort">
                Sort by<img src={dropdown_icon} alt="" />
            </div>
         </div>
         <div className="shop-category-products">
            {all_product.map((item,i)=> {
            if (props.category===item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.old_price} oldprice={item.old_price} />
            }
            else {
                return null;
            }
    
            })}
         </div>
         <div className="shop-category-loadmore">
            Explore More
         </div>
    </div>)
}
export default Shopcategory;