import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://w.namu.la/s/8d0ac4491b28831a1b633640522b415e6532a2d1dc7db71e0fb429b8ae97d2b228141530c157de42bf30ce8756637951690b6d0ea9838542b3535768ae638ad23d026f6764d8c08acfa621a4dda979f4f1d7d76770bf918e974245efed0bebdc" alt=""/>

                <div>
                    <h2 className="checkout_title">
                        {user?.email}의 장바구니입니다
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image}
                        price={item.price} rating={item.rating}/>
                    ))}

                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;