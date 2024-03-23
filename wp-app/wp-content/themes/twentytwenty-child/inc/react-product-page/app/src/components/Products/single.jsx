import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

/**
 * Component create a single row of product list with action buttons
 */
const SingleProductList = ( {singleProduct, removeProduct, editProduct} ) => {

    const {
        id,
        title,
        fimg_url
    } = singleProduct;

    return(
        <tr key={id}>
            <td>{fimg_url && parse( fimg_url )}</td>
            <td>{title.rendered}</td>
            <td>
                    <div><button className="btn btn-warning" onClick={() => { editProduct() }}>Edit</button></div>
                    <div className="mt-1"><button className="btn btn-danger" onClick={() => { removeProduct() }}>Remove</button></div>
            </td>
        </tr>
      );
}

export default SingleProductList;
