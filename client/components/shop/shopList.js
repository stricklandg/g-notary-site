import React from 'react';
import ProductItem from '../productitem';
import ProductsList from '../productslist';
import { Link } from 'react-router';
import {ListGroup} from 'react-bootstrap';


const ShopList = (props) => {
    let {category, products, baseURI} = props;
    //the below could be moved to the container and passed to this object
    var baseURL;
    if (baseURI[0] == 'order') {
        baseURL = `/${baseURI[0]}/${baseURI[1]}/`
    } else {
        baseURL = `/${baseURI[0]}/`
    }

    return (
        <div className="left">
            <div className="col-xs-4">
                <ProductsList title="Products">
                    <ListGroup componentClass="ul">
                        {products.length !== 0 ? products.map((product) => {
                            return <Link className="list-group-item" key={product._id} to={`${baseURL}${category}/${product._id}`}>
                                <ProductItem product={product}/>
                            </Link>
                        }) : <p>Loading Product Content</p>}
                    </ListGroup>
                </ProductsList>
            </div>
            <div className="col-xs-8">
                {props.children}
            </div>
        </div>
    )
};



export default ShopList;