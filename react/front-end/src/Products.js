import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "./utils/AuthContext";

function Products() {

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    const { isAuthenticated, jwtToken } = useAuth();

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8080/products", config)
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("http://localhost:8080/categories", config)
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [isAuthenticated])

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category_id, setCategory_id] = useState(null);


    function handleName(event) {
        setName(event.target.value);
    }

    function handlePrice(event) {
        setPrice(parseFloat(event.target.value));
    }

    function handleQuantity(event) {
        setQuantity(parseInt(event.target.value));
    }

    function handleCategory(event) {
        setCategory_id(event.target.value);
    }
    function getProduct() {
        axios.get("http://localhost:8080/products", config)
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function createProduct(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: quantity,
            category_id: category_id
        }

        axios.post("http://localhost:8080/products", data, config)
            .then(function (response) {
                getProduct();
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    const [edit, setEdit] = useState(null);
    const [product_id, setProduct_id] = useState(null);

    function updateProduct(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: quantity,
            category_id: category_id,
        }

        axios.put("http://localhost:8080/products/" + product_id, data, config)
            .then(function (response) {
                getProduct();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (

        <div>
            <h1>Products</h1>

            {products && products.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>name : {product.name}</h2>
                        <p>category : {product.category.name}</p>
                        <p>price : {product.price}</p>
                        <p>quantity : {product.quantity}</p>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            setEdit(true);
                            setProduct_id(product.id);
                            setName(product.name);
                            setPrice(product.price);
                            setQuantity(product.quantity);
                            setCategory_id(product.category.id);
                        }}>Edit</button>
                    </div>
                )

            })

            }



            {!edit &&
                <div>
                    <h2>Create Product</h2>
                    <form onSubmit={createProduct}>

                        <div>
                            <label>Product Name</label>
                            <input type="text" required onChange={handleName} />
                        </div>

                        <div>
                            <label>Product Price</label>
                            <input type="text" required onChange={handlePrice} />
                        </div>

                        <div>
                            <label>Product Quantity</label>
                            <input type="text" required onChange={handleQuantity} />
                        </div>

                        <div>
                            <label>Product Category</label>
                            <select onChange={handleCategory} required>
                                <option value="">select</option>

                                {categories && categories.map((category) => {
                                    return (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    )

                                })

                                }
                            </select>
                        </div>
                        <br />

                        <button type="submit" >Create Product</button>

                    </form>
                </div>
            }

            {edit &&
                <div>
                    <h2>Update Product</h2>
                    <form onSubmit={updateProduct}>

                        <div>
                            <label>Product Name</label>
                            <input type="text" required onChange={handleName} value={name} />
                        </div>

                        <div>
                            <label>Product Price</label>
                            <input type="text" required onChange={handlePrice} value={price} />
                        </div>

                        <div>
                            <label>Product Quantity</label>
                            <input type="text" required onChange={handleQuantity} value={quantity} />
                        </div>

                        <div>
                            <label>Product Category</label>
                            <select onChange={handleCategory} required>
                                <option value="">select</option>

                                {categories && categories.map((category) => {
                                    return (
                                        <option key={category.id} value={category.id} selected={category_id === category.id}>{category.name}</option>
                                    )

                                })

                                }
                            </select>
                        </div>
                        <br />

                        <button type="submit" >Update Product</button>
                        &nbsp;
                        <button type="buttton" onClick={()=>{
                            setEdit(null);
                        }} >Cancel</button>

                    </form>
                </div>
            }
        </div>
    )
}
export default Products;