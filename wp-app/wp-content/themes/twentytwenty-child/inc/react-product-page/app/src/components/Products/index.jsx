import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import AddNewProduct from './add';
import ProductsList from './list';
import EditProduct from './edit';

/**
 *  Component get products and set properly view
 */
const Products = () => {

    const [products, setProducts] = useState([]);
    const [siteType, setSiteType] = useState("products");
    const [editId, setEditId] = useState("");

    const [{ data, loading }, refetch] = useAxios(
        origin + '/wp-json/wp/v2/product'
    );

    useEffect(() => {
        !loading && setProducts(data);
    }, [data]);

    useEffect(() => {
        refetch();
        !loading && setProducts(data);
    }, [siteType])

    return(
        <>
            {siteType === "products" && <ProductsList products={products} setSiteType={setSiteType} setEditId={setEditId} /> }
            {siteType === "add" && <AddNewProduct setSiteType={setSiteType} />}
            {siteType === "edit" && <EditProduct setSiteType={setSiteType} productId={editId} />}
            {siteType === "remove" && <div class="alert alert-danger" >Removing...</div>}
        </>
    );
}

export default Products;
