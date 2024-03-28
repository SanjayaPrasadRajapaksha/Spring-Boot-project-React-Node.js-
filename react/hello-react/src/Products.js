import axios from "axios";
import { useEffect, useState } from "react";

function Products() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])


    return (

        <div>
            <h1>Products</h1>

            {products && products.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                )

            })

            }

        </div>
    )
}
export default Products;