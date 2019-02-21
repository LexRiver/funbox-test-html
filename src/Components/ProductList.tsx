import * as React from 'react';
import './ProductList.css';

export interface Props {
    children:any
}

export function ProductList(props:Props) {

  return (
    <div className="product-list">
        {props.children}
    </div>
  );
}

