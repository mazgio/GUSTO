import React from "react";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import iceCream from "../../images/ice-cream.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mitVergnügen from "../../images/mitVergnügen.png";
import biobread from "../../images/biobread.png";
import farmFresh from "../../images/farmFresh.png";
import metroPartner from "../../images/metroPartner.png";
import mashrooms from "../../images/mashrooms.png";
import dontWasteFood from "../../images/dontWasteFood.jpg";
import tooGoodToGo from "../../images/tooGoodToGo.png";
import honey from "../../images/honey.png";
import services1 from "../../images/services/Bioproducts.png";
import services2 from "../../images/services/Bakeries.png";
import services3 from "../../images/services/Desserts.png";
import services4 from "../../images/Foodmarkets.png";
import services5 from "../../images/services/Halalproducts.png";
import services6 from "../../images/services/Recipes.png";
import services7 from "../../images/services/Restaurants.png";
import services8 from "../../images/services/Spices&Herbs.png";
import services9 from "../../images/services/Vegan.png";
import "./Home.css";
import { Typography } from "@material-ui/core";


const Home = () => {


    return (
        <>
            <Carousel style={{ margin: '30px' }} showArrows={true} showThumbs={false} autoPlay autoPlaySpeed="3000" infiniteLoop={true}>
                <img alt="" src={image1} className="slider-img" />
                <img alt="" src={image2} className="slider-img" />
                <img alt="" src={image3} className="slider-img" />
                <img alt="" src={image4} className="slider-img" />
                <img alt="" src={image5} className="slider-img" />
                <img alt="" src={iceCream} className="slider-img" />
            </Carousel>
            {/* Start Services Section */}

            <div className="services">
                <Typography>
                    <h2 className="servicesTitle">Services</h2>
                </Typography>

                <div className="services-container">

                    <div className="services-box">
                        <img src={services1} alt="" />
                        <div className="services-content">
                            <h3>Bio Products</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services2} alt="" />
                        <div className="services-content">
                            <h3>Bakeries</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services3} alt="" />
                        <div className="services-content">
                            <h3>Desserts</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services4} alt="" />
                        <div className="services-content">
                            <h3>Food Markets</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services5} alt="" />
                        <div className="services-content">
                            <h3>Halal Products</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services6} alt="" />
                        <div className="services-content">
                            <h3>Recipes</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services7} alt="" />
                        <div className="services-content">
                            <h3>Restaurants</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services8} alt="" />
                        <div className="services-content">
                            <h3>Spices & Herbs</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                    <div className="services-box">
                        <img src={services9} alt="" />
                        <div className="services-content">
                            <h3>Vegan</h3>
                            <p>Here we are offering you the best food quality around you</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* End Services Section */}

            {/* Start Partner Section */}
            <div className="partners">
                <h2>Our Partners</h2>
                <div className="partners-container">
                    <div className="partners-box">
                        <img alt="" src={mitVergnügen} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={metroPartner} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={biobread} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={farmFresh} />
                    </div>

                    <div className="partners-box">
                        <img alt="" src={mashrooms} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={dontWasteFood} />
                    </div>

                    <div className="partners-box">
                        <img alt="" src={tooGoodToGo} />
                    </div>
                    <div className="partners-box">
                        <img alt="" src={honey} />
                    </div>
                </div>
            </div>;
            {/* End Partner Section */}
        </>
    );
};

export default Home;