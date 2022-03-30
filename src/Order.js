import React from 'react';
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import {getBasketTotal} from "./reducer";
import CurrencyFormat from "react-currency-format";

function Order(order) {
    return (
        <div className="order">
            <h2>주문</h2>
            <p>{moment.unix(order.data.created).format()}</p>

            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct id={item.id} title={item.title} image={item.image}
                                 price={item.price} rating={item.rating} hideButton/>
            ))}
            <CurrencyFormat
                renderText={(value) => (
                        <p>
                            <h3 className="order_total">최종 주문 총액 : {value}원</h3>

                        </p>

                )}

                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"￦"}
            />
        </div>
    );
}

export default Order;