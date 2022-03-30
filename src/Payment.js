import React, {useEffect, useState} from 'react';
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import {Link, useNavigate} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "./axios";
import {db} from "./firebase";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const navigation = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState("");
    const [succeed, setSucceed] = useState(false);


    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const res = await axios({
                method: "POST",
                url: "/payments/create?total=" + getBasketTotal(basket) * 100
            });
            console.log("액시오스 포스트 성공")
            setClientSecret(res.data.clientSecret);
        }
        getClientSecret();
    }, [basket])

    console.log(clientSecret);

    const handleSubmit = async (event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment 확인 및 정보

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created

                })

            setSucceed(true);
            setError(null)
            setProcessing("")

// 딜레이가 생겻을때 버튼이 비활성화 된다. 하지만 너무 빨리 넘어가서 확인이 불가능


            dispatch({
                type: 'EMPTY_BASKET'
            })


            navigation.replace('/orders')

        })

    }

    const handleChange = (e) => {
        setDisable(e.empty);
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <Link to={"/checkout"} className="checkoutlink">
                    <h1>장바구니로 돌아가기 </h1>
                    <h3>({basket?.length}) 개의 상품목록이 존재합니다.</h3>
                </Link>


                <div className="payment_section">

                    <div className="payment_title">
                        <h3>배달 받을 곳</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email} 님의 주소</p>
                        <p>대구시</p>
                        <p>수성구</p>
                    </div>

                </div>
            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h1>상품 목록</h1>
                </div>

                <div className="payment_items">
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image}
                                         price={item.price} rating={item.rating}/>
                    ))}
                </div>
            </div>

            <div className="payment_section">

                <div className="payment_title">
                    <h3>결제</h3>
                </div>
                <div className="payment_details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment_priceContainer">

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

                            <button disabled={processing || disable || succeed}>
                                <span>{processing ? <p>결제 중 입니다.</p> : "결제하기"}</span>
                            </button>

                        </div>

                        {error && <div>{error}</div>}

                    </form>
                </div>

            </div>

        </div>
    );
}

export default Payment;