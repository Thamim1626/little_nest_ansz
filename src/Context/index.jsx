import React from 'react'
const prevItemData = localStorage.getItem('cartToken') !== null ? JSON.parse(localStorage.getItem('cartToken')) : []

const ProductDetail = React.createContext({
    allProductList: [],
    cartList: prevItemData,
    addCartItem: () => { },
    removeCartItem: () => { },
    formDate: {
        name: '',
        email: '',
        number: '',
        city: '',
        subject: ''
    },
    formUpdateContext: () => { }
})
export default ProductDetail