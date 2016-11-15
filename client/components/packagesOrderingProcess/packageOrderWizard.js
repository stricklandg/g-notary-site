/**
 * Created by gregorydrake on 7/16/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {Panel, Row, Grid, Col} from 'react-bootstrap';
import renderButtons from './renderFieldForPackagesButtons';
import { browserHistory } from 'react-router';
import _ from "lodash";

function buttonGenerator(packages, admin, notaryType) {
    let packagesArray = packages;
    var packagesCopied = _.cloneDeep(packages);

    const packageRemoved = _.remove(packagesCopied, function(value) {
        return value.type !== "D"
    });

    var buttonsToLoad = [];

    switch (notaryType) {
        case 0:
            packageRemoved.forEach((value) => {
                buttonsToLoad.push(value);
            });
            break;
        case 1:
            packagesArray.forEach((value) => {
                buttonsToLoad.push(value);
            });
            break;
        default:
            break;
    }
    return buttonsToLoad;
};

class PackageOrderForm extends Component {

    render() {
        const { packages, previousPage, reveal, tempBondId, cart, removePackageOrBond, newOrRenewNotary, packageSelector, onSubmit} = this.props;
        const arrayOfButtons = buttonGenerator(packages,reveal, newOrRenewNotary);
        const arrayLength = arrayOfButtons.length;
        var smCellSize;
        var mdCellSize;
        var lgCellSize;
        if (arrayLength == 5) {
            smCellSize = 6;
            mdCellSize = 4;
            lgCellSize = 4;
        } else {
            smCellSize = 6;
            mdCellSize = 6;
            lgCellSize = 6;
        }

        return (
            <div className="form-group">
                <label>Click a Package Below To Get Started</label>
                <div className="form-spacer"/>
                <Grid>
                    <Row>
                            {arrayOfButtons.map((value, index) => { return (
                                 <Col sm={smCellSize} md={mdCellSize} lg={lgCellSize} key={index}>
                                     <Panel header={<div><h4>{value.name}</h4><h5>$ {value.price}</h5></div>} onClick={() => {packageSelector(value.type, value._id); onSubmit()}}><div style={{height: "90px"}}><ul>{value.description.map((value, index) => {return <li key={index}>{value}</li>})}</ul></div></Panel>
                                </Col>
                            )})}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default PackageOrderForm;