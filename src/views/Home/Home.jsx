import React from "react";
import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";
import '../../styling/home.css';
import '../../styling/slider.css';

const Home = () => {

    return(
        <div>
            <Slider/>
            <img 
                className="MobileHeader" 
                src="/imgs/slider/slider1.jpg" 
                alt="cat and dog cuddling"
                width="640"
                height="360"
            />
            <h1 className="HeaderPA">Pet Ace</h1>


            <div className="AboutUs">
                <h2>About Us</h2>
                <p>At Pet Ace, we connect passionate people, trusted brands and committed retailers to bring pets the very best. We provide the knowledge and support to help our pet companions grow. Together, we help pets live happier, healthier lives. Because when pets thrive, the people who love and care for them do too.</p>
            </div>

            <section className="Animals-Served">
                <h2 className="Animal-Title">Animals We Serve</h2>

                <section className="Animals">
                    <div>
                        <img src="/imgs/homeImgs/dog.jpg" 
                            alt="husky dog in the snow" 
                            width="640" 
                            height="360"/>
                        <h3>Canines</h3>
                    </div>
                    <div>
                        <img src="/imgs/homeImgs/cat.jpg" 
                            alt="cat sunbathing" 
                            width="640" 
                            height="360"/>
                        <h3>Felines</h3>
                    </div>
                    <div>
                        <img src="/imgs/homeImgs/turtle.jpg" 
                            alt="turtle sunbathing" 
                            width="640" 
                            height="360"/>
                        <h3>Reptiles</h3>
                    </div>
                </section>
            </section>
            <Footer/>
        </div>
    )
}

export default Home;