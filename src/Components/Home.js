import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="1"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={180.00}
                        rating={1}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                    />
                    <Product
                        id="2"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={128.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={99.99}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
                    <Product
                        id="4"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={14.99}
                        rating={4}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="5"
                        title="Rapid Brew 12-Cup Programmable Coffee Maker"
                        price={69.99}
                        rating={4}
                        image="https://media.kohlsimg.com/is/image/kohls/4552488?wid=1200&hei=1200&op_sharpen=1"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="6"
                        title="Full 4 Piece Bedroom Set"
                        price={690.00}
                        rating={5}
                        image="https://www.livingspaces.com/globalassets/productassets/200000-299999/240000-249999/247000-247999/247100-247199/247126/247126_brown_wood_bedroom_set_signature_01.jpg?w=1000&h=674&mode=pad" />
                </div>
            </div>
        </div>
    )
}

export default Home