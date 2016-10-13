import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import orderNormalizer from '../validators/orderDescriptionNormalizer';


//Still need to destroy form somehow
class OrderWizardReview extends Component {

    render() {
        var {OrderWizardState} = this.props;
        let OrderWizardArray = _.toPairs(OrderWizardState);
        return (
            <Panel collapsible defaultExpanded header="Personal Info">
                Basic information on the individual whom requires the bond.
                <ListGroup fill>
                    {OrderWizardArray.length !== 0 ? OrderWizardArray.map((field) => {
                        return orderNormalizer(field)
                       }) : <ListGroupItem key={'Loading-Default'}>Loading Form Data For Review</ListGroupItem>}

                </ListGroup>
            </Panel>
        )
    }
}

var OrderWizardReviewForm = reduxForm({
    form: 'orderwizard',
    destroyOnUnmount: false
})(OrderWizardReview);


let OrderWizardReviewFormExport = connect(state => {
    var OrderWizardState = state.form.orderwizard.values;
    return {
        OrderWizardState
    }}, null)(OrderWizardReviewForm);


export default OrderWizardReviewFormExport;