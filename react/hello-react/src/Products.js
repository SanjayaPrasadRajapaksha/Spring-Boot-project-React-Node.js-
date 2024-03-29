import axios from "axios";
import { useEffect, useState } from "react";

function Products() {

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("http://localhost:8080/categories")
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category_id, setCategory_id] = useState(null);

    function handleName(event) {
        setName(event.target.value);
    }

    function handlePrice(event) {
        setPrice(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(event.target.value);
    }

    function handleCategory(event) {
        setCategory_id(event.target.value);
    }

    function createProduct(event) {
        event.preventDefault();

        const data = {
            name :name,
            price :price,
            quantity :quantity,
            category_id:category_id
        }

        axios.post("http://localhost:8080/product" , data)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function(error){
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

                    </div>
                )

            })

            }


            <h1>Create Product</h1>
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
                            return(
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                           
                        })

                        }
                    </select>
                </div>
                <br />
                <br />
                <br />
                <button type="submit" >Create Product</button>

            </form>

        </div>
    )
}
export default Products;