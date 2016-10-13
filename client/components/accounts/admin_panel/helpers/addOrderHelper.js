/**
 * Created by gregorydrake on 9/30/16.
 */
import React from 'react';
import { Field, FieldArray } from 'redux-form';
import { Row, Col } from 'react-bootstrap';
import renderInput from '../../../RenderField';
import ImageDropForm from './handleImageUpload';

function formsToAppear(inventory, itemSelected) {
    switch (itemSelected) {
        case "Self-Inking Acknowledgement Stamp":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your Stamp</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input"/>
                        </Col>
                        <Col xs={10} md={11} lg={11}>
                            <label>Place Your Existing Notary Information on the Stamp?</label>
                        </Col>
                    </Row>

                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput}
                                           placeholder="Notary Number"/>
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput}
                                           placeholder="Expiration Date"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} md={8} lg={8}>
                                <div>
                                    <label>Name on Stamp</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryname`} type="text" component={renderInput}
                                           placeholder="Name on Stamp"/>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-spacer">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name={`${inventory}.notregistered`} type="checkbox" component="input"/>
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>I am registering to become a Notary today through JP Everhart</label>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
            break;
        case "Notary Public Record Book":
            break;
        case "Fingerprint Pad":
            break;
        case "Desk Sign":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your Sign</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <label>What name should be displayed on your desk sign?</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8} md={8} lg={8}>
                            <Field name={`${inventory}.notaryname`} type="text" component={renderInput}
                                   placeholder="Notary's Name"/>
                        </Col>
                    </Row>
                </div>
            )
            break;
        case "Metal Embossing Seal":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your Stamp</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input"/>
                        </Col>
                        <Col xs={10} md={11} lg={11}>
                            <label>Place Your Existing Notary Information on the Stamp?</label>
                        </Col>
                    </Row>

                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput}
                                           placeholder="Notary Number"/>
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput}
                                           placeholder="Expiration Date"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} md={8} lg={8}>
                                <div>
                                    <label>Name on Stamp</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryname`} type="text" component={renderInput}
                                           placeholder="Name on Stamp"/>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-spacer">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name={`${inventory}.notregistered`} type="checkbox" component="input"/>
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>I am registering to become a Notary today through JP Everhart</label>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
            break;
        case "Impression Inker":
            break;
        case "Pocket Size Stamp":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your Stamp</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input"/>
                        </Col>
                        <Col xs={10} md={11} lg={11}>
                            <label>Place Your Existing Notary Information on the Stamp?</label>
                        </Col>
                    </Row>

                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput}
                                           placeholder="Notary Number"/>
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput}
                                           placeholder="Expiration Date"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} md={8} lg={8}>
                                <div>
                                    <label>Name on Stamp</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryname`} type="text" component={renderInput}
                                           placeholder="Name on Stamp"/>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-spacer">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name={`${inventory}.notregistered`} type="checkbox" component="input"/>
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>I am registering to become a Notary today through JP Everhart</label>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
            break;
        case "Self-Inking Round Stamp":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your Stamp</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input"/>
                        </Col>
                        <Col xs={10} md={11} lg={11}>
                            <label>Place Your Existing Notary Information on the Stamp?</label>
                        </Col>
                    </Row>

                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput}
                                           placeholder="Notary Number"/>
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput}
                                           placeholder="Expiration Date"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} md={8} lg={8}>
                                <div>
                                    <label>Name on Stamp</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryname`} type="text" component={renderInput}
                                           placeholder="Name on Stamp"/>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-spacer">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name={`${inventory}.notregistered`} type="checkbox" component="input"/>
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>I am registering to become a Notary today through JP Everhart</label>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
            break;
        case "Basic Package":
            return (
                <div>
            <Row>
                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.firstName`} type="text" component={renderInput} label="First Name" placeholder="First Name"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.middleName`} type="text" component={renderInput} label="Middle Name" placeholder="Middle Name"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
            <Field name={`${inventory}.lastName`} type="text" component={renderInput} label="Last Name" placeholder="Last Name"/>
                </Col>

            </Row>

                    <div className="form-spacer" />

            <Row>
                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.telephone`} type="text" component={renderInput} label="Telephone" placeholder="Telephone (xxx)-xxx-xxxx"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.email`} type="text" component={renderInput} label="Email" placeholder="Email"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.birthday`} type="text" component={renderInput} label="Birthday" placeholder="Birthday"/>
                </Col>

            </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

            <Row>
                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.ssNumber`} type="text" component={renderInput} label="Social Security Number" placeholder="Social Security Number xxx-xx-xxxx"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.dlNumber`} type="text" component={renderInput} label="Driver's License" placeholder="Driver's License"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.dlissuing`} type="text" component={renderInput} label="Issuing State" placeholder="Issuing State"/>
                </Col>
            </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

            <Row>
                <Col sm={12} md={12} lg={12}>
                    <Field name={`${inventory}.street1`} type="text" component={renderInput} label="Street" placeholder="Street"/>
                </Col>

                <Col sm={12} md={12} lg={12}>
                    <Field name={`${inventory}.street2`} type="text" component={renderInput} label="Street 2" placeholder="Street 2"/>
                </Col>

                <div className="form-spacer" />

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.city`} type="text" component={renderInput} label="City" placeholder="City"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.state`} type="text" component={renderInput} label="State" placeholder="State"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.zip`} type="text" component={renderInput} label="Zip" placeholder="Zip"/>
                </Col>

                <Col sm={4} md={4} lg={4}>
                    <Field name={`${inventory}.county`} type="text" component={renderInput} label="County" placeholder="County"/>
                </Col>
            </Row>

            <Row>
                <Col xs={8} md={8} lg={8}>
                    <label><h5>Statements Relating To Qualifications</h5></label>
                    <div className="checkbox">
                        <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="guilty"/>
                            A. I have been found guilty of a crime other than a Class C misdemeanor
                        </label>
                    </div>

                    <div className="checkbox">
                        <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="notguilty"/>
                            B. I have not been found guilty of a crime other than a Class C misdemeanor
                        </label>
                    </div>

                    <label><h5>Statements Relating to Residency</h5></label>
                    <div className="checkbox">
                        <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="resident"/>
                            A. I am currently a resident of the state of Texas
                        </label>
                    </div>

                    <div className="checkbox">
                        <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="nonresident"/>
                            B. I am not a resident of the state of Texas
                        </label>
                    </div>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    <ImageDropForm/>
                </Col>
            </Row>

                </div>);
            break;
        case "Premium Package":
            return (
                <div>
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.firstName`} type="text" component={renderInput} label="First Name" placeholder="First Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.middleName`} type="text" component={renderInput} label="Middle Name" placeholder="Middle Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.lastName`} type="text" component={renderInput} label="Last Name" placeholder="Last Name"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.telephone`} type="text" component={renderInput} label="Telephone" placeholder="Telephone (xxx)-xxx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.email`} type="text" component={renderInput} label="Email" placeholder="Email"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.birthday`} type="text" component={renderInput} label="Birthday" placeholder="Birthday"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.ssNumber`} type="text" component={renderInput} label="Social Security Number" placeholder="Social Security Number xxx-xx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlNumber`} type="text" component={renderInput} label="Driver's License" placeholder="Driver's License"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlissuing`} type="text" component={renderInput} label="Issuing State" placeholder="Issuing State"/>
                        </Col>
                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street1`} type="text" component={renderInput} label="Street" placeholder="Street"/>
                        </Col>

                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street2`} type="text" component={renderInput} label="Street 2" placeholder="Street 2"/>
                        </Col>

                        <div className="form-spacer" />

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.city`} type="text" component={renderInput} label="City" placeholder="City"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.state`} type="text" component={renderInput} label="State" placeholder="State"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.zip`} type="text" component={renderInput} label="Zip" placeholder="Zip"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.county`} type="text" component={renderInput} label="County" placeholder="County"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={8} md={8} lg={8}>
                            <label><h5>Statements Relating To Qualifications</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="guilty"/>
                                    A. I have been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="notguilty"/>
                                    B. I have not been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <label><h5>Statements Relating to Residency</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="resident"/>
                                    A. I am currently a resident of the state of Texas
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="nonresident"/>
                                    B. I am not a resident of the state of Texas
                                </label>
                            </div>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <ImageDropForm/>
                        </Col>
                    </Row>

                </div>);
            break;
        case "Renewal Package":
            return (
                <div>
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.firstName`} type="text" component={renderInput} label="First Name" placeholder="First Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.middleName`} type="text" component={renderInput} label="Middle Name" placeholder="Middle Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.lastName`} type="text" component={renderInput} label="Last Name" placeholder="Last Name"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.telephone`} type="text" component={renderInput} label="Telephone" placeholder="Telephone (xxx)-xxx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.email`} type="text" component={renderInput} label="Email" placeholder="Email"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.birthday`} type="text" component={renderInput} label="Birthday" placeholder="Birthday"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.ssNumber`} type="text" component={renderInput} label="Social Security Number" placeholder="Social Security Number xxx-xx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlNumber`} type="text" component={renderInput} label="Driver's License" placeholder="Driver's License"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlissuing`} type="text" component={renderInput} label="Issuing State" placeholder="Issuing State"/>
                        </Col>
                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street1`} type="text" component={renderInput} label="Street" placeholder="Street"/>
                        </Col>

                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street2`} type="text" component={renderInput} label="Street 2" placeholder="Street 2"/>
                        </Col>

                        <div className="form-spacer" />

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.city`} type="text" component={renderInput} label="City" placeholder="City"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.state`} type="text" component={renderInput} label="State" placeholder="State"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.zip`} type="text" component={renderInput} label="Zip" placeholder="Zip"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.county`} type="text" component={renderInput} label="County" placeholder="County"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={8} md={8} lg={8}>
                            <label><h5>Statements Relating To Qualifications</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="guilty"/>
                                    A. I have been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="notguilty"/>
                                    B. I have not been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <label><h5>Statements Relating to Residency</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="resident"/>
                                    A. I am currently a resident of the state of Texas
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="nonresident"/>
                                    B. I am not a resident of the state of Texas
                                </label>
                            </div>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <ImageDropForm/>
                        </Col>
                    </Row>

                </div>);
            break;
        case "New Notary Package":
            return (
                <div>
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.firstName`} type="text" component={renderInput} label="First Name" placeholder="First Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.middleName`} type="text" component={renderInput} label="Middle Name" placeholder="Middle Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.lastName`} type="text" component={renderInput} label="Last Name" placeholder="Last Name"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.telephone`} type="text" component={renderInput} label="Telephone" placeholder="Telephone (xxx)-xxx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.email`} type="text" component={renderInput} label="Email" placeholder="Email"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.birthday`} type="text" component={renderInput} label="Birthday" placeholder="Birthday"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.ssNumber`} type="text" component={renderInput} label="Social Security Number" placeholder="Social Security Number xxx-xx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlNumber`} type="text" component={renderInput} label="Driver's License" placeholder="Driver's License"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlissuing`} type="text" component={renderInput} label="Issuing State" placeholder="Issuing State"/>
                        </Col>
                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street1`} type="text" component={renderInput} label="Street" placeholder="Street"/>
                        </Col>

                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street2`} type="text" component={renderInput} label="Street 2" placeholder="Street 2"/>
                        </Col>

                        <div className="form-spacer" />

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.city`} type="text" component={renderInput} label="City" placeholder="City"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.state`} type="text" component={renderInput} label="State" placeholder="State"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.zip`} type="text" component={renderInput} label="Zip" placeholder="Zip"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.county`} type="text" component={renderInput} label="County" placeholder="County"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={8} md={8} lg={8}>
                            <label><h5>Statements Relating To Qualifications</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="guilty"/>
                                    A. I have been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="notguilty"/>
                                    B. I have not been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <label><h5>Statements Relating to Residency</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="resident"/>
                                    A. I am currently a resident of the state of Texas
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="nonresident"/>
                                    B. I am not a resident of the state of Texas
                                </label>
                            </div>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <ImageDropForm/>
                        </Col>
                    </Row>

                </div>);
            break;
        case "Bond Only":
            return (
                <div>
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.firstName`} type="text" component={renderInput} label="First Name" placeholder="First Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.middleName`} type="text" component={renderInput} label="Middle Name" placeholder="Middle Name"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.lastName`} type="text" component={renderInput} label="Last Name" placeholder="Last Name"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.telephone`} type="text" component={renderInput} label="Telephone" placeholder="Telephone (xxx)-xxx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.email`} type="text" component={renderInput} label="Email" placeholder="Email"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.birthday`} type="text" component={renderInput} label="Birthday" placeholder="Birthday"/>
                        </Col>

                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.ssNumber`} type="text" component={renderInput} label="Social Security Number" placeholder="Social Security Number xxx-xx-xxxx"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlNumber`} type="text" component={renderInput} label="Driver's License" placeholder="Driver's License"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.dlissuing`} type="text" component={renderInput} label="Issuing State" placeholder="Issuing State"/>
                        </Col>
                    </Row>

                    <div className="form-spacer" />
                    <div className="form-spacer" />

                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street1`} type="text" component={renderInput} label="Street" placeholder="Street"/>
                        </Col>

                        <Col sm={12} md={12} lg={12}>
                            <Field name={`${inventory}.street2`} type="text" component={renderInput} label="Street 2" placeholder="Street 2"/>
                        </Col>

                        <div className="form-spacer" />

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.city`} type="text" component={renderInput} label="City" placeholder="City"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.state`} type="text" component={renderInput} label="State" placeholder="State"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.zip`} type="text" component={renderInput} label="Zip" placeholder="Zip"/>
                        </Col>

                        <Col sm={4} md={4} lg={4}>
                            <Field name={`${inventory}.county`} type="text" component={renderInput} label="County" placeholder="County"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={8} md={8} lg={8}>
                            <label><h5>Statements Relating To Qualifications</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="guilty"/>
                                    A. I have been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.guiltyOfCrime`} type="radio" component="input" value="notguilty"/>
                                    B. I have not been found guilty of a crime other than a Class C misdemeanor
                                </label>
                            </div>

                            <label><h5>Statements Relating to Residency</h5></label>
                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="resident"/>
                                    A. I am currently a resident of the state of Texas
                                </label>
                            </div>

                            <div className="checkbox">
                                <label><Field name={`${inventory}.texasResidency`} type="radio" component="input" value="nonresident"/>
                                    B. I am not a resident of the state of Texas
                                </label>
                            </div>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <ImageDropForm/>
                        </Col>
                    </Row>

                </div>);
            break;
        case "Coverage $5,000":
            return (
            <div>
                <Row>
                <Col xs={12}>
                    <h4>Customize Your EO</h4>
                </Col>
                </Row>
                <Row>
                    <Col xs={1} md={1} lg={1}>
                        <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input" />
                    </Col>
                    <Col xs={10} md={11} lg ={11}>
                        <label>Select Your Bond Policy</label>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col xs={5} md={4} lg={4}>
                            <div>
                                <label>Notary Number</label>
                                <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput} placeholder="Notary Number" />
                            </div>
                        </Col>
                        <Col xs={5} md={4} lg={4}>
                            <div>
                                <label>Notary Expiration Date</label>
                                <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput} placeholder="Expiration Date" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="form-spacer">
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.donotremember`} type="checkbox" component="input" />
                        </Col>
                        <Col xs={10} md={11} lg={11}>
                            <label>Do Not Have a Bond Policy Yet?</label>
                        </Col>
                    </Row>
                </div>
                </div>);
            break;
        case "Coverage $10,000":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your EO</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input" />
                        </Col>
                        <Col xs={10} md={11} lg ={11}>
                            <label>Select Your Bond Policy</label>
                        </Col>
                    </Row>
                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput} placeholder="Notary Number" />
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput} placeholder="Expiration Date" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="form-spacer">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name={`${inventory}.donotremember`} type="checkbox" component="input" />
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>Do Not Have a Bond Policy Yet?</label>
                            </Col>
                        </Row>
                    </div>
                </div>);
            break;
        case "Coverage $15,000":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your EO</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input" />
                        </Col>
                        <Col xs={10} md={11} lg ={11}>
                            <label>Select Your Bond Policy</label>
                        </Col>
                    </Row>
                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput} placeholder="Notary Number" />
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput} placeholder="Expiration Date" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="form-spacer">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name={`${inventory}.donotremember`} type="checkbox" component="input" />
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>Do Not Have a Bond Policy Yet?</label>
                            </Col>
                        </Row>
                    </div>
                </div>);
            break;
        case "Coverage $25,000":
            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h4>Customize Your EO</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1} md={1} lg={1}>
                            <Field name={`${inventory}.hasExistingNotaryInfo`} type="checkbox" component="input" />
                        </Col>
                        <Col xs={10} md={11} lg ={11}>
                            <label>Select Your Bond Policy</label>
                        </Col>
                    </Row>
                    <div>
                        <Row>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Number</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notarynumber`} type="text" component={renderInput} placeholder="Notary Number" />
                                </div>
                            </Col>
                            <Col xs={5} md={4} lg={4}>
                                <div>
                                    <label>Notary Expiration Date</label>
                                    <Field name={`${inventory}.hasExistingNotaryInfoObject.notaryexpirationdate`} type="text" component={renderInput} placeholder="Expiration Date" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="form-spacer">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <Field name={`${inventory}.donotremember`} type="checkbox" component="input" />
                            </Col>
                            <Col xs={10} md={11} lg={11}>
                                <label>Do Not Have a Bond Policy Yet?</label>
                            </Col>
                        </Row>
                    </div>
                </div>);
            break;
        default:
            break;

    }
}

export default formsToAppear