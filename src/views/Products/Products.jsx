import React, {Component} from "react";
import Product from "../../Components/Products/Product";
import productsData from "../../Components/Products/products-data.json";

import Footer from "../../Components/Footer";

// filter for price and product type
//add a search bar for input? here or App.js? 


class Products extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: productsData
        }
    }

    //filter handler begins---------------------------------
    filterHandler = (event) => {

    }

    //------------------------------------------------------

    render() {
        const DisplayProducts = this.state.products.map((product, i) => {
            return(
                <Product
                    key={i}
                    name={product.name}
                    imgURL={product.imgURL}
                    alt={product.alt}
                    description={product.description}
                    price={product.price}
                />
            );
        })

        return(
            <div>
                <h1>Products Page</h1>
                {DisplayProducts}
                <Footer/>
                
            </div>
        );
    }
};

export default Products;