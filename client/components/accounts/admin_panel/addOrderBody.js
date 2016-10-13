/**
 * Created by gregorydrake on 9/30/16.
 */
import React, { Component } from 'react';
import {Grid, Row, Col, Form, FormGroup, Panel, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import renderSelectedInput from '../../RenderSearchableField';
import renderInput from '../../RenderField';
import formsToAppear from './helpers/addOrderHelper';
import _ from 'lodash'
var moment = require('moment-timezone');


const renderItems = ({fields, inventoryOptions, formState, meta: {touched, error } }) => (
    <ListGroup>
            <Row>
               <Col xs={4} md={4} lg={4}>
                    <Button onClick={()=> fields.push({addedItem: formState.addorderbody.values.inventoryItem.value})}>Add Item</Button>
               </Col>
                <Col xs={8} md={8} lg={8}>
                    <Field name="inventoryItem" options={inventoryOptions} component={renderSelectedInput} />
                </Col>
            </Row>
        <div className="form-spacer" />
        {fields.map((inventory, index) => {
            return (
            <ListGroupItem key={index}>
                <Row>

                <Col xs={10} md={10} lg={10}>
                <h4>{formState.addorderbody.values.inventory[index].addedItem}</h4>
                </Col>

                <Col xsOffset={10} mdOffset={11} lgOffset={11}>
                <Button title="Remove Item" onClick={() => fields.remove(index)} bsStyle="danger">x</Button>
                </Col>

                <Col sm={12} md={12} lg={12}>
                    <div className="form-spacer">
                    {formsToAppear(inventory, formState.addorderbody.values.inventory[index].addedItem)}
                    </div>
                </Col>

                </Row>
            </ListGroupItem> )
        }
        )}
    </ListGroup>
);

class AddOrderBody extends Component {
    render() {
        var {supplies, packages, eo, formState} = this.props;
        let combinedInventory = Object.assign({}, supplies, packages, eo);
        let inventoryArray = _.values(combinedInventory);
        let mappedInventory = inventoryArray.map((inventory) => {return {value: `${inventory.name}`, label: `${inventory.name}`}});
        return (
            <Grid>
                <Row>
                    <Panel>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <h5>
                                Add Items
                            </h5>
                            <div className="panel-body">
                                <FormGroup>
                                    <Col sm={12} md={12} lg={12}>
                                        <FieldArray name="inventory" inventoryOptions={mappedInventory} formState={formState} component={renderItems}/>
                                        <div className="form-spacer" />
                                    </Col>
                                </FormGroup>
                            </div>
                        </Col>
                    </Panel>
                </Row>
            </Grid>
        )
    }
}

var AddOrderForm = reduxForm({
    form: 'addorderbody',
})(AddOrderBody);

function mapStateToProps(state) {
    return {
        supplies: state.supplies,
        packages: state.packages,
        eo: state.eo,
        formState: state.form
    }
}

export default AddOrderBodyContainer = connect(mapStateToProps, null)(AddOrderForm);