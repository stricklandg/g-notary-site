/**
 * Created by gregorydrake on 6/22/16.
 */
import React, { Component } from 'react'
import {ListGroupItem, Row, Col} from 'react-bootstrap';
import _ from 'lodash';

export default class CartProduct extends Component {
    render() {
        const { price, quantity, name, removeFromCart, addInfo, unq_id } = this.props;
        const header = (
                        <Row>
                            <Col xs={8} md={8}>
                            <div className="pull-left">
                                <h4>{name}</h4>
                            </div>
                            </Col>
                            <Col xs={4} md={4}>
                                <span>
                                     <div className="pull-right">
                                         <button className="btn-invisible" onClick={() => removeFromCart(unq_id, addInfo, quantity)}>
                                            <span className="badge">
                                                <span className="glyphicon glyphicon-remove" aria-hidden="delete"></span>
                                            </span>
                                        </button>
                                     </div>
                                    <div className="cart-price">
                                        <b>$ {price}</b>
                                    </div>
                                </span>
                            </Col>

                        </Row>);

        return   (
                        <li className="list-group-item">
                            {header}
                            <Row>
                                <Col xs={12}>
                                        <b>Quantity</b>: {quantity}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    {addInfo ? (<div><b>Additional Info</b>: <ul>{
                                        addInfo.map((value, index) => {if (_.isObject(value[1])) {
                                            var valueForReturn = [];
                                            _.forIn(value[1], function(value, key) {
                                                valueForReturn.push([key, value]);
                                            });

                                            return valueForReturn.map(anArray => {
                                                return ( <p className="text-indent-2" key={anArray[0]}><b>{anArray[0]}</b> : {anArray[1]}</p>)
                                            })

                                        } else {
                                            return <p className="text-indent-2" key={index}><b>{value[0]}</b> : {value[1]}</p>
                                        }})


                                    }</ul></div>) : <div></div>}
                                </Col>
                            </Row>
                        </li>
        )
    }
}

/*

 if (_.isObject(value[1])) {
 var valueForReturn = [];
 _.forIn(value[1], function(value, key) {
 valueForReturn.push([key, value]);
 });

 return valueForReturn.map(anArray => {
 return ( <p className="text-indent-2" key={anArray[0]}>{anArray[0]} - {anArray[1]}</p>)
 })

 } else {
 return <li key={index}>{value[0]} : {value[1]}</li>
 }

 */