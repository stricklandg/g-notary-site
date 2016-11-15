/**
 * Created by gregorydrake on 11/3/16.
 */
import React, { Component } from 'react';
import { FormGroup, Clearfix, Col, Row, Form, Button, Alert} from 'react-bootstrap';
import ConnectedAddBondNumForm from './addBondNumber';

class AddNumWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            alertVisible: false
        }
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.handleAlertShow = this.handleAlertShow.bind(this);
    }

    render() {
        var {bondId, orderNum, index} = this.props;
        if (this.state.alertVisible) {
            return(
                <Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
                    <ConnectedAddBondNumForm bondId={bondId} orderNum={orderNum} index={index}/>
                    <p>
                        Please enter the bond number above and hit the arrow key to save.
                    </p>
                </Alert>
            )
        }
        return (
            <Button onClick={this.handleAlertShow}>Add Bond Number</Button>
        );
    }

    handleAlertDismiss() {
        this.setState({alertVisible: false});
    }

    handleAlertShow() {
        this.setState({alertVisible: true});
    }
}

export default AddNumWrapper;