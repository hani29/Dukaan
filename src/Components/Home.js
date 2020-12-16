import React, { Component } from 'react'
import Slider from "react-slick";


var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    autoplaySpeed: 5,
    pauseOnHover: true,
    arrows: false,
    responsive: [{ breakpoint: 980, settings: { slidesToShow: 3, slidesToScroll: 3, initialSlide: 3 } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }]
};

class Home extends Component {



    render() {
        const data = [
            {
                image: "./Image/cream.png",
                item: "Ice Cream Bowl",
                unit: "1 Unit",
                price: "₹209",
                discount: "₹399",
                stock: "ADD +",
                off: "30% OFF"
            },
            {
                image: "./Image/baskin.png",
                item: "Baskin Robbin’s Scoop Cup",
                unit: "1 Unit",
                price: "₹399",
                discount: "",
                stock: "Out of stock"
            },
            {
                image: "./Image/kwality.png",
                item: "Kwality Walls Black Currant",
                unit: "1 Unit",
                price: "₹249",
                discount: "",
                stock: "ADD +"
            },
            {
                image: "./Image/cream.png",
                item: "Ice Cream Bowl",
                unit: "1 Unit",
                price: "₹209",
                discount: "₹399",
                stock: "- 3 +",
                off: "30% OFF"
            },
            {  
                image: "./Image/baskin.png",
                item: "Baskin Robbin’s Scoop Cup",
                unit: "1 Unit",
                price: "₹399",
                discount: "",
                stock: "ADD +"
            },
            {
                image: "./Image/kwality.png",
                item: "Kwality Walls Black Currant",
                unit: "1 Unit",
                price: "₹249",
                discount: "",
                stock: "ADD +"
            },
            {
                image: "./Image/kwality.png",
                item: "Kwality Walls Black Currant",
                unit: "1 Unit",
                price: "₹249",
                discount: "",
                stock: "ADD +"
            },
            {
                image: "./Image/kwality.png",
                item: "Kwality Walls Black Currant",
                unit: "1 Unit",
                price: "₹249",
                discount: "",
                stock: "ADD +"
            },
            {
                image: "./Image/kwality.png",
                item: "Kwality Walls Black Currant",
                unit: "1 Unit",
                price: "₹249",
                discount: "",
                stock: "ADD +"
            }
        ]

        return (
            <div>
                <div className="container">
                    <div className="store-made-with">Store made with
                  <img src="./Image/logo.png" className="img" alt="" />
                    </div>
                    <div className="download">DOWNLOAD APP</div>
                </div>
                <div className="container2">
                    <img src="./Image/ice.png" className="img2" alt="" />
                    <div className="sub-conatiner">
                        <div className="Mano-Super-Market">Mano Super Market</div>
                        <div className="container2">
                            <img src="./Image/tick.png" className="img3" alt="" />
                            <div className="trusted">TRUSTED SELLER</div>
                        </div>
                    </div>
                </div>
                <div className="search-container">
                    <span className="search-for-products"> Search for products…</span>
                </div>
                <div className="seprator" />
                <h1 className="seller-container">Bestsellers</h1>
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src="./Image/cream.png" className="slide-img" alt="" />
                            <div className="text">Ice Creams</div>
                        </div>
                        <div>
                            <img src="./Image/food.png" className="slide-img" alt="" />
                            <div className="text">Home Food</div>
                        </div>
                        <div>
                            <img src="./Image/cream.png" className="slide-img" alt="" />
                            <div className="text">Ice Creams</div>
                        </div>
                        <div>
                            <img src="./Image/food.png" className="slide-img" alt="" />
                            <div className="text">Home Food</div>
                        </div>
                        <div>
                            <img src="./Image/cream.png" className="slide-img" alt="" />
                            <div className="text">Ice Creams</div>
                        </div>
                        <div>
                            <img src="./Image/food.png" className="slide-img" alt="" />
                            <div className="text">Home Food</div>
                        </div>
                        <div>
                            <img src="./Image/cream.png" className="slide-img" alt="" />
                            <div className="text">Ice Creams</div>
                        </div>
                        <div>
                            <img src="./Image/food.png" className="slide-img" alt="" />
                            <div className="text">Home Food</div>
                        </div>
                    </Slider>
                </div>
                <div className="container2">
                    <h1 className="seller-container">Ice Creams</h1>
                    <div className="badge">10</div>
                </div>
                {data.map((items) => {
                    return (
                        <div>
                            <div className="container2">
                                <div style={{ position: "relative" }}>
                                    <img src={items.image} className="ice-img" alt="" />
                                    {items.off && <div className="text-img">{items.off}</div>}
                                </div>
                                <div className="sub-conatiner">
                                    <div className="item">{items.item}</div>
                                    <div className="unit">{items.unit}</div>
                                    <div className="container2">
                                        <div className="price">{items.price}</div>
                                        <div className="discount">{items.discount}</div>
                                        <div style={{ marginLeft: "auto", padding: 10 }}>
                                            {items.stock === "Out of stock" ?
                                                <div className="stocks">{items.stock}</div>
                                                :
                                                <button className="btn"><span className="btn-text">{items.stock}</span></button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                    )
                }
                )}
                <div className="container3">
                    <div className="product">
                        <span>SEE ALL PRODUCTS</span>
                        <img src="./Image/assert.png" alt="" className="assert" />
                    </div>
                </div>
                <div className="container2">
                    <h1 className="seller-container">Ice Creams</h1>
                    <div className="badge">1</div>
                </div>
                <div>
                    <div className="container2">
                        <div style={{ position: "relative" }}>
                            <img src="./Image/kwality.png" alt="" className="ice-img" />
                        </div>
                        <div className="sub-conatiner">
                            <div className="item">Kwality Walls Black Currant</div>
                            <div className="unit">1 Unit</div>
                            <div className="container2">
                                <div className="price">₹175</div>
                                <div style={{ marginLeft: "auto", padding: 10 }}>
                                    <button className="btn"><span className="btn-text">ADD +</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="session1">
                        <div>
                            <img src="./Image/icon.png" alt="" className="ice-imgs" />
                            <div className="footer-texts">Free Delivery (above ₹500)</div>
                        </div >
                        <div>
                            <img src="./Image/icons-protection.png" alt="" className="ice-imgs" />
                            <div className="footer-texts">Buyer Protection</div>
                        </div>
                        <div>
                            <img src="./Image/icons-support.png" alt="" className="ice-imgs" />
                            <div className="footer-texts">Customer Support</div>
                        </div>
                    </div>
                    <div className="lines" />
                    <div className="sub-conatiner2">
                        <div className="store">STORE DETAILS</div>
                        <div>Mano Super Market </div>
                        <div>Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</div>
                       
                    </div>
                    <div className="session2">
                            <img src="./Image/group-18.png" alt="" className="ice-imgs2" />
                            <div className="conatiner-code">
                            <div className="code">
                                <img src="./Image/group-3.png" alt="" />
                            </div>
                            </div>
                        </div>

                </div>
                <div className="container3">
                    <div className="bg-menu">
                        <img src="./Image/navicons-home-active.png" alt="" className="foorter-img2"/>
                        <div className="footer-text2">Home</div>
                    </div >
                    <div className="container3">
                        <img src="./Image/navicons-bag-inactive.png" alt="" className="footer-img"/>
                        <div className="footer-text">Bag</div>
                    </div >
                    <div className="container3">
                        <img src="./Image/navicons-orders-inactive.png" alt="" className="footer-img"/>
                        <div className="footer-text">Orders</div>
                    </div >

                </div>

            </div>
        );
    }
}


export default Home;
