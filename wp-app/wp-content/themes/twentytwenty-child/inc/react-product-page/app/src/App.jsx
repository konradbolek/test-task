import React from 'react';
import Products from './components/Products';

const App = () => {

    return (
        <div className="singlepage-product-component container bg-light p-2">
            <h1>Products page</h1>
            <p>Add / Edit / Delete products</p>
            <Products />
        </div> 
    );
  
};

export default App;
