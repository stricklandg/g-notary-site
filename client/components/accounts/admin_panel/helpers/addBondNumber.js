/**
 * Created by gregorydrake on 10/30/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, Clearfix, Col, Row, Form} from 'react-bootstrap';
import renderInput from '../../../RenderField';
import addBondNumToOrder from '../../../../events/actions/add_bond_num_to_order';
var console = window.console || { log: function() {} };
class AddBondNum extends Component {
    render() {
        var {handleSubmit, bondId, orderNum, index} = this.props;

        return (
        <Form onSubmit={handleSubmit((value) => this.props.addBondNumToOrder(value.bondnum, bondId.BondId, orderNum, index))}>
            <FormGroup>
                <Col sm={12} md={12} lg={12}>
                    <div className="form-spacer">
                        <label>Add Bond Number</label>
                    </div>
                </Col>
                <Col sm={10} md={10} lg={10}>
                    <div style={{margin: "0px -5px 15px -5px"}}>
                        <Field name={"bondnum"} component={renderInput}/>
                    </div>
                </Col>
                <Col sm={2} md={2} lg={2}>
                    <div style={{margin: "0px 25px 15px 0"}}>
                    <button type="submit" className="btn btn-primary"><b>></b></button>
                    </div>
                </Col>
            </FormGroup>
        </Form>
        )
    }
}

const AddBondNumForm = reduxForm({
    form: 'addbondnum',
})(AddBondNum);

let ConnectedAddBondNumForm = connect(null, {addBondNumToOrder})(AddBondNumForm);



export default ConnectedAddBondNumForm;