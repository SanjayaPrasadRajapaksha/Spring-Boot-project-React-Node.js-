import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Orders() {

    const [orders, setOrders] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/orders')
            .then(function (response) {
                setOrders(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    return (
        <div className="container">
            <h1>Orders</h1>
            <div className='text-end'>
                <button className="btn btn-primary" onClick={()=>{
                    axios.post('http://localhost:8080/order')
                    .then(function (response) {
                       navigate(`/orders/${response.data.id}/editOrder`)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}>Create Order</button>
            </div>

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Total Items</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.orderedProducts.length}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>{
                                             navigate(`/orders/${order.id}/editOrder`)
                                        }}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Orders