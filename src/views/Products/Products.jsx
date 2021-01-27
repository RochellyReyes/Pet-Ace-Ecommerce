import React, {Component} from "react";
import Product from "../../Components/Products/Product";
import productsData from "../../Components/Products/products-data.json";
import "../../styling/products.css";

import Footer from "../../Components/Footer";
// filter for price and product type
//add a search bar for input? here or App.js? 


class Products extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: productsData,
            filterProducts: productsData,
        }
    }

    defaultHandler = (filter) => {
        this.setState({
            filterProducts: this.state.products,
        });
   }
    
    handleSpecies = (filter) => {
        const filterAn = this.state.products.filter((filterValue) => {
            if(filterValue.species === filter ){
                return true;
            } 
            
            return false;
        });

        this.setState({
            filterProducts: filterAn,
        });
   }

    //handleFilterPrice = () => {
        // update state to only include matched price
        //sort() https://www.javascripttutorial.net/javascript-array-filter/
    //}

    render() {
        const DisplayProducts =this.state.filterProducts.map((product, i) => {
            return(
                <Product
                    key={i}
                    name={product.name}
                    imgURL={product.imgURL}
                    alt={product.alt}
                    description={product.description}
                    price={product.price}
                    link={product.link}
                />
            );
        })        

        return(
            <div className="Products">
                <h1>Things They'll Enjoy!</h1>

                <div className="SpeciesFilter">
                    <p>Filter by Animal</p>

                    <button onClick={()=>{this.defaultHandler('All');}}>All</button>

                    <button onClick={()=> { this.handleSpecies('Dog'); }}>Canine</button>
                    <button onClick={()=> { this.handleSpecies('Cat'); }}>Feline</button>
                    <button onClick={() => {this.handleSpecies('Reptile');}}>Reptiles</button>
                </div>

                <div>
                    <p>Price Filter</p>
                </div>

                
                {DisplayProducts}
                
                
                <Footer/>
                
            </div>
        );
    }
};

export default Products;