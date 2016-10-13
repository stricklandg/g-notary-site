/**
 * Created by gregorydrake on 9/23/16.
 */
/**
 * Created by gregorydrake on 7/15/16.
 */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Col, FormGroup, Clearfix, Row } from 'react-bootstrap';
import { renderBeginDate, renderEndDate }from '../helpers/DateRangeFields';


var moment = require('moment-timezone');

class datesSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
            endDate: moment()
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
        return date.toString()
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });

        return date.toString()
    }

    render(){
        const { handleSubmit, handleDates } = this.props;
    return (
        <Row>
        <Form onSubmit={handleSubmit((value) => handleDates(value))}>
            <Col xs={10} md={10} lg={10}>
            <FormGroup>
                <Clearfix visibleMdBlock/>
                <Clearfix visibleSmBlock/>
                <Col sm={2} md={2} lg={2}>
                    <div className="form-spacer">
                        <label>Begin Date</label>
                    </div>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <div className="form-spacer">
                        <Field name="begindate" component={renderBeginDate} customProp={{startDate: this.state.startDate, endDate: this.state.endDate, onChangeStart: this.handleChangeStart}} />
                    </div>
                </Col>
                <Col sm={2} md={2} lg={2}>
                    <div className="form-spacer">
                        <label>End Date</label>
                    </div>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <div className="form-spacer">
                        <Field name="enddate" component={renderEndDate} customProp={{startDate: this.state.startDate, endDate: this.state.endDate, onChangeEnd: this.handleChangeEnd}}/>
                    </div>
                </Col>
            </FormGroup>
            </Col>
            <Col sm={2} md={2} lg={2}>
            <FormGroup>
                <Col sm={2} md={2} lg={2}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Col>
            </FormGroup>
            </Col>

        </Form>
        </Row>


    )
}
};

export default reduxForm({
    form: 'datesselector',
    initialValues: {begindate: moment().format('MM/DD/YYYY'), enddate: moment().format('MM/DD/YYYY')}
})(datesSelector)