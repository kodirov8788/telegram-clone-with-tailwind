import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductList() {
    const [data, setData] = useState([])
    // console.log(data)
    useEffect(() => {
        const getData = async () => {
            await axios.get("https://fakestoreapi.com/products")
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        return () => {
            getData()
        }
    }, [])

    return (
        <div className='w-full grid grid-cols-3 '>
            {
                data.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))
            }
        </div>
    )
}

export default ProductList