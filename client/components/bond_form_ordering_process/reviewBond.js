/**
 * Created by gregorydrake on 8/1/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, Field } from 'redux-form';
import OrderWizardReviewFormExport from './helpers/orderWizardReview';
import SignHere from './signhere';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import revealSelection from '../../events/actions/reveal_selection';


//Still need to destroy form somehow
class ReviewBondComponent extends Component {
    //Must add component that shows additional items added on previous screen.
    //Must add signature block

    constructor() {
        super();
    }

    componentWillUpdate(nextProps) {
        var reveal = true;
        if (nextProps.selection == "requireupload") {
            reveal = false
        }
        nextProps.revealSelection(reveal);
    }

    render() {
        var {isAdmin, selection, tempBondInfo, cart, orderForm, packageType} = this.props;
        var reveal = true;

            if (selection == "requireupload") {
                reveal = false
            }

    return (
        <Grid>
            <Row className="show-grid">
                <Col xs={12}>
        <OrderWizardReviewFormExport />
                </Col>
                <Clearfix visibleLgBlock/>
                <Col xs={12} lg={12}>

                    {isAdmin == true ? <div>
                        <label><h5>Upload Form or Run As A New Bond</h5></label>
                        <div className="checkbox">
                            <label><Field name="formupload" type="radio" component="input" value="requireupload"/>
                                A. Upload Form
                            </label>
                        </div>

                        <div className="checkbox">
                            <label><Field name="formupload" type="radio" component="input" value="newbond"/>
                                B. Run As a New Bond
                            </label>
                        </div>

                    </div> : <div></div>}

                    <h5>Please sign your name on the line below:</h5>
                </Col>
                <Clearfix visibleLgBlock/>
                <Col xs={12} lg={12}>
        <SignHere reveal={reveal}
                  tempBondInfo={tempBondInfo}
                  cart={cart}
                  orderForm={orderForm}
                  packageType={packageType}
                  previousPage={this.props.previousPage}
                  nextPage={this.props.onSubmit}/>
                </Col>
            </Row>
        </Grid>
        )
    }
}

const ReviewBondForm = reduxForm({
    form: 'reviewAdmin',
})(ReviewBondComponent);

const selector = formValueSelector('reviewAdmin');

export default ReviewBond = connect(state => ({
    selection: selector(state, 'formupload'),
    cart: state.cart,
    orderForm: state.form.orderwizard.values,
    packageType: state.packageType.packageId,
}), {revealSelection})(ReviewBondForm);
