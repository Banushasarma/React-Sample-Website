import React from 'react'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__warapper">
                    <ul className="cards__items">
                        <CartItem
                            src='images/img-9.jpg'
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CartItem
                            src='images/img-2.jpg'
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CartItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CartItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CartItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart
