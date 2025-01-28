import React from "react";
import './item.css';
import { Link } from "react-router-dom";

const Item =(props) => {
    return (<div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
              <p>{props.name}</p>

            <div className="item-prices">
                 <div className="item-price-new">
                  
                      ${props.newprice}
                </div>

                <div className="item-price-old">
                      ${props.oldprice}
                </div>
                
            </div>
    </div>)
}
export default Item;