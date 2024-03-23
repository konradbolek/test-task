import React from 'react';
const {render} = wp.element;
import App from './App';

if (document.getElementById('prodcuts-react-app')) {
    render(<App/>, document.getElementById('prodcuts-react-app'));
}