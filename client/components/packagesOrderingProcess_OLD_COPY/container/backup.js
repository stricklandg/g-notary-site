/**
 * Created by gregorydrake on 9/15/16.
 */
import React from 'react';
import _ from 'lodash';
import {ButtonGroup, Button, Row, Col} from 'react-bootstrap';
import {bootstrapUtils} from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');

let customizeButtonCSS = `.btn-custom {
        margin: 15px;
        min-height: 180px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: #FFFFFF;

        }`;

const renderButtons = props => {
    const { input: {onChange}, arrayForButtons, orderDetails } = props;
    var indexToRemove = _.findIndex(arrayForButtons, {name: 'Renewal Package'});
    var arrayClone = _.cloneDeep(arrayForButtons);
    arrayClone.splice(indexToRemove, 1);
    return (

        <Row role="group">
            {orderDetails.isRenewal == 0 ?
                arrayClone.map((value) => {

                        return (
                            <div key={value.type}>
                                <Col xs={6} md={6} lg={6}>
                                    <style type="text/css">{customizeButtonCSS}</style>
                                    <Button bsStyle="custom"
                                            onClick={() => onChange({id: value._id, packageType: value.type})}>
                                        <p><b>{value.name}</b></p>
                                        <p><b>$ {value.price}</b></p>
                                        <p>
                                            <Row>
                                                {value.description.map(value =>  {return <Col key={value} xs={12} lg={12}>{value}</Col>} )}
                                            </Row>
                                        </p>

                                    </Button>
                                    {props.touched && props.error && <span>{props.error}</span>}

                                </Col>
                            </div>
                        )
                    }
                ) : arrayForButtons.map((value) => {
                    return (
                        <div key={value.type}>
                            <Col xs={6} md={6} lg={6}>

                                <style type="text/css">{customizeButtonCSS}</style>
                                <Button bsStyle="custom"
                                        onClick={() => onChange({id: value._id, packageType: value.type})}>
                                    <p><b>{value.name}</b></p>
                                    <p><b>$ {value.price}</b></p>
                                    <p>
                                        <ol>
                                            {value.description.map( value =>  {return <li>{value}</li>} )}
                                        </ol>
                                    </p>

                                </Button>
                                {props.touched && props.error && <span>{props.error}</span>}

                            </Col>
                        </div>
                    )
                }
            )
            }

        </Row>

    )
};

export default renderButtons;

/*
 <button onClick={() => onChange('none')}>No Package</button>
 {props.touched && props.error && <span>{props.error}</span>}
 */
