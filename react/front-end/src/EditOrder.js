import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditOrder() {
    const { id } = useParams();
    const [orders, setOrders] = useState();
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get(`http://localhost:8080/orders/${id}`)
            .then(function (response) {
                setOrders(response.data);
            })
            .catch(function (error) {
                console.log(error)
            });

        axios.get("http://localhost:8080/products")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    return (
        <div>
            <h2>Add Product to Order #{id}</h2>

            {
                orders &&
                <div>

                    <div className='d-flex align-item-center justify-content-between'>
                        <div className='date-time'>
                            Date & Time : {orders.orderDate}
                        </div>
                        <div className='total-price'>
                            Total Price : Rs. {orders.totalPrice}
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-lg-9'>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        orders && orders.orderedProducts.map((products) => {
                                            return (

                                                <tr>
                                                    <td>{products.id}</td>
                                                    <td>{products.name}</td>
                                                    <td>{products.price}</td>
                                                    <td><button type='button' className='btn btn-danger btn-sm' onClick={()=>{
                                                        
                                                        axios.delete(`http://localhost:8080/order/${id}/product/${products.id}`)
                                                           .then(function (response) {
                                                                setOrders(response.data)
                                                            })
                                                           .catch(function (error) {
                                                                console.log(error);
                                                            });
                                                    }}>Remove</button></td>
                                                </tr>

                                            )

                                        })
                                    }

                                </tbody>
                            </table>

                        </div>

                        <div className='col-lg-3'>
                            <div className='products'>
                                {
                                    products && products.map((product) => {
                                        return (
                                            <div key={product.id}>
                                                <div className='product p-3 bg-light shadow-sm mb-3 rounded'>

                                                    <h5>{product.name}</h5>

                                                    <div className='product-price'>
                                                        Rs. {product.price}
                                                    </div>
                                                    <button className='btn btn-outline-secondary btn-sm' type='button' onClick={(e) => {
                                                        e.preventDefault();
                                                        const data = {
                                                            product_id: product.id,
                                                            quantity: 1
                                                        }

                                                        axios.post(`http://localhost:8080/order/${id}/addProduct`, data)
                                                            .then(function (response) {
                                                                setOrders(response.data)
                                                            })
                                                            .catch(function (error) {
                                                                console.log(error);
                                                            })
                                                    }}>Add</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>

                    </div>
                </div>


            }
        </div>
    )
}

export default EditOrder