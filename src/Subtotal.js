import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useNavigate} from "react-router-dom";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const navigation = useNavigate();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총액( {basket.length} items) : <strong>{value}원</strong>

                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>
                            체크박스
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"￦"}
            />

            <button onClick={() => navigation("/payment")}>결제하러 가기</button>
        </div>
    );
}

export default Subtotal;