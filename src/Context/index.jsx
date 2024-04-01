import React from 'react'
const prevItemData = localStorage.getItem('cartToken') !== null ? JSON.parse(localStorage.getItem('cartToken')) : []

const ProductDetail = React.createContext({
    allProductList: [],
    cartList: prevItemData,
    addCartItem: () => { },
    removeCartItem: () => { },
})
export default ProductDetail