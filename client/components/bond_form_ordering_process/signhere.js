import React, { Component } from 'react';
import { connect } from 'react-redux';
import {passPdf} from '../../events/actions/form_signed';
import SignaturePad from 'react-signature-pad';
import GeneratePdf from '../pdfGen';
import { Grid, Row, Col } from 'react-bootstrap'
import localforage from 'localforage';
import {addOrderWizardData} from '../../events/actions/add_temp_bond_to_reducer';
import {addTempBondToDB} from '../../events/actions/add_temp_bond_db';
import stringGen from '../../helper/randomStringGenerator';
import convertFormToImage from '../../events/actions/convert_form_to_image';
import triggerLoader from '../../events/actions/trigger_loader';
import ImageDropForm from '../accounts/admin_panel/helpers/handleImageUpload';
import _ from 'lodash';

//show error that session didn't load and the user needs to enable cookies
class SignHere extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }


  submit(bondImage) {
      var { reveal, addTempBondToDB, cart, orderForm, packageType  } = this.props;
      const randomID = stringGen(4);
      var existingSessionValue = localforage.getItem('sessionID');

      if (reveal == true) {
        existingSessionValue.then((value) => {

            if (value == undefined) {
                throw new Error("No SessionID Found, Enable Cookies and Restart Form");
            } else {
                var signature = this.refs.mySignature;
                var orderClone = _.cloneDeep(orderForm);
                var uploadedForm = false;
                /*----------------------------------------*/
                orderClone["id"] = randomID;
                if (reveal == false) { uploadedForm = true; }
                orderClone["uploadedForm"] = uploadedForm;
                if (!signature.isEmpty()) {
                    var signatureData = signature.toDataURL("image/png");
                    const addInfoPackage = {  packageType, cart, orderForm, reveal, signatureData };
                    addTempBondToDB(orderClone, value, addInfoPackage);
                    this.props.nextPage();
                }

            }
        }).catch((e) => {});
    } else {
          existingSessionValue.then((value) => {

              if (value == undefined) {
                  throw new Error("No SessionID Found, Enable Cookies and Restart Form");
              } else {
                  var signatureData = "none";
                  var orderClone = _.cloneDeep(orderForm);
                  var uploadedForm = false;
                  //console.log the bondImage to determine if anything is even being passed****8
                  const addInfoPackage = { packageType, cart, orderForm, reveal, signatureData, bondImage};
                  /*----------------------------------------*/
                  orderClone["id"] = randomID;
                  if (reveal == false) { uploadedForm = true; }
                  orderClone["uploadedForm"] = uploadedForm;

                  //some how we need to tell it we aren't passing the signature and to save the image uploaded
                  addTempBondToDB(orderClone, value, addInfoPackage);

                  this.props.nextPage();

              }
          }).catch((e) => {});
    }

  }

  render() {
    var {reveal, bondImage, admin} = this.props;
    var disableButton = false;
    if (admin) {
        if (reveal == false) {
            if (bondImage == "") {
                disableButton = true;
            }
        }
    }
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12} lg={12}>
            {reveal == true ?  <SignaturePad clearButton="true" ref="mySignature"/> : <ImageDropForm>Reveal False</ImageDropForm>}
          </Col>
          <Col xs={12}>
            <button type="submit" className="btn btn-primary" onClick={()=> {this.submit(bondImage)}} disabled={disableButton}>Submit</button>
          </Col>
        </Row>
      </Grid>

    );
  }
}

function mapStateToProps(state) {
    return {
        bondImage: state.uploadedBondImage.image,
        admin: state.administrator
    }
}

export default connect(mapStateToProps, {addOrderWizardData, passPdf, convertFormToImage, addTempBondToDB, triggerLoader})(SignHere);
