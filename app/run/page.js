"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Run() {
    const cartRef = useRef(null);

    useEffect(() => {
        gsap.to(cartRef.current, {
            opacity: 0.5,
        });
    }, [cartRef]);
    
    return (
        <div>
            <h4 ref={cartRef} className="title">cart</h4>
            <CartItem />
            <CartItem />
        </div>
    );
}

function CartItem() {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
