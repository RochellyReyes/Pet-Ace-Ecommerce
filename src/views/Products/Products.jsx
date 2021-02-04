import React, {Component} from "react";
import Product from "../../Components/Products/Product";
import productsData from "../../Components/Products/products-data.json";
import "../../styling/products.css";
import "../../styling/product.css";
 
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

    defaultHandler = () => {
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

    handlePriceFilter = (min, max) => {
        const filterPrice = this.state.products.filter((filterValue) => {
            if (filterValue.price >= min && filterValue.price <= max){
                return true
            } return false
        });

        this.setState({
            filterProducts: filterPrice,
        });
    };

    render() {
        const DisplayProducts = this.state.filterProducts.map((product, i) => {
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
        });

        return(
            <div className="Products">
                <h1 className="ProductsHeader">Things They'll Enjoy!</h1>

                <div className="Filter">
                    <p className="FilterHeader">Filter by Animal</p>

                    <button 
                        className="SpeciesFBtn"
                        onClick={()=>{this.defaultHandler();}}>All</button>

                    <button 
                        className="SpeciesFBtn"
                        onClick={()=> { this.handleSpecies('Dog'); }}>Canine</button>

                    <button 
                        className="SpeciesFBtn"
                        onClick={()=> { this.handleSpecies('Cat'); }}>Feline</button>

                    <button 
                        className="SpeciesFBtn"
                        onClick={() => {this.handleSpecies('Reptile');}}>Reptile</button>
                </div>

                
                <div className="Filter">
                    <p className="FilterHeader">Filter by Price</p>
                    <button 
                        className="PriceFBtn"
                        onClick={()=> {this.handlePriceFilter(0, 25.00); }}>Under $25</button>

                    <button
                        className="PriceFBtn"
                        onClick={()=> {this.handlePriceFilter(25.01, 50.00); }}>25-50</button>

                    <button 
                        className="PriceFBtn"
                        onClick={() => {this.handlePriceFilter(50.01, 100.00);}}>50-100</button>

                    <button 
                        className="PriceFBtn"
                        onClick={() => {this.handlePriceFilter(100.01, 500.00);}}>100& Above</button>

                    <button
                        className="PriceFBtn"        
                        onClick={()=>{this.defaultHandler();}}>Reset</button>

                </div>

                
                {DisplayProducts}
                
                
                <Footer/>
                
            </div>
        );
    }
};

export default Products;