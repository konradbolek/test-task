import React from 'react';
import SingleProductList from "./single";
import axios from 'axios';
import axiosHeaders from '../../helpers/axiosHeader';
import PageTitle from '../../helpers/pageTitle';

/**
 * Component create a table with list of products
 */
const ProductsList = ({ products, setSiteType, setEditId }) => {


    const removeProduct = (id) => {
        setSiteType("remove");
        axios.delete(origin + '/wp-json/wp/v2/product/' + id, axiosHeaders)
        .then(response => {
            setTimeout(() => {
                setSiteType("products");
            }, 1000);
            
        })
        .catch(error => {
            console.error('Error deleting resource:', error);
        });
    }

    const editProduct = (id) => {
        setEditId(id);
        setSiteType("edit");
    }

    return(
        <>
            <PageTitle title={"Products list"} />
            <button className="btn btn-primary mb-2" onClick={ () => setSiteType( "add" ) }>Add new</button>
            {
                products.length > 0 ? 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col" width={'20%'}>Image</th>
                        <th scope="col" width={'50%'}>Product name</th>
                        <th scope="col" width={'10%'}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((singleProduct, i) => <SingleProductList singleProduct={singleProduct} removeProduct={() => removeProduct(singleProduct.id)} editProduct={() => editProduct(singleProduct.id)} /> )}
                    </tbody>
                </table> 
                : 
                <div class="alert alert-info" >No products</div>
            }
        </>
    );
}

export default ProductsList;
