import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/popular";
import Offers from "../components/offers/offers";
import Collections from "../components/New Collections/newcollections";
import Newsletter from "../components/Newsletter/Newsletter";

const Shop =() => {
    return (<div>
       <Hero />
       <Popular/>
       <Offers />
       <Collections/>
       <Newsletter />
    </div>);
}
export default Shop;