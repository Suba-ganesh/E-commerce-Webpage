import React from 'react';
import './newcollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../item/item';


const Collections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.old_price} oldprice={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Collections;