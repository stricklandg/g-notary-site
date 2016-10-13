import React from 'react';
import _ from 'lodash';
import {ButtonGroup, Button, Row, Col} from 'react-bootstrap';

const renderButtons = props => {
    const { input: {onChange}, arrayForButtons, orderDetails } = props;
    var indexToRemove = _.findIndex(arrayForButtons, {name: 'Renewal Package'});
    var arrayClone = _.cloneDeep(arrayForButtons);
    arrayClone.splice(indexToRemove, 1);
    return (

        <div className="btn-group btn-group-justified" role="group">

            {orderDetails.isRenewal == 0 ?
                arrayClone.map((value) => {
                        return (
                            <div className="btn-group" role="group" key={value.type}>
                                <button className="btn btn-default"
                                        onClick={() => onChange({id: value._id, packageType: value.type})}>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <b>{value.name}</b>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <b>$ {value.price}</b>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <ul>
                                                {value.description.map(value => {return <li key={value}>{value}</li>})}
                                            </ul>
                                        </Col>
                                    </Row>
                                </button>
                                {props.touched && props.error && <span>{props.error}</span>}
                            </div>
                        )
                    }
                ) : arrayForButtons.map((value) => {
                    return (
                        <div className="btn-group" role="group" key={value.type}>
                            <button className="btn btn-default"
                                    onClick={() => onChange({id: value._id, packageType: value.type})}>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <b>{value.name}</b>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <b>$ {value.price}</b>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <ul>
                                            {value.description.map(value => {return <li key={value}>{value}</li>})}
                                        </ul>
                                    </Col>
                                </Row>
                            </button>
                            {props.touched && props.error && <span>{props.error}</span>}
                        </div>
                    )
                }
            )
            }

        </div>

    )
};

export default renderButtons;

/*
 <button onClick={() => onChange('none')}>No Package</button>
 {props.touched && props.error && <span>{props.error}</span>}
 */
