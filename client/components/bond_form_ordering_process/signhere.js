import React, { Component } from 'react';
import { connect } from 'react-redux';
import {passPdf} from '../../events/actions/form_signed';
import SignaturePad from 'react-signature-pad';
import GeneratePdf from '../pdfGen';
import { Grid, Row, Col } from 'react-bootstrap'
import {addOrderWizardData} from '../../events/actions/add_temp_bond_to_reducer';
import stringGen from '../../helper/randomStringGenerator';
import ImageDropForm from '../accounts/admin_panel/helpers/handleImageUpload';

class SignHere extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }



  submit(reveal) {

    if (reveal == true) {
      var signature = this.refs.mySignature;
      var signatureData = signature.toDataURL('image/png');
      if (!signature.isEmpty()) {
        // Generate pdf return pdf uri (first arg: signature uri, second arg: user data object)

        const randomID = stringGen(4);
        //probably insert whether it's being uploaded or not here.
        this.props.addOrderWizardData(this.props.orderInfo, randomID, reveal);
        var pdf = GeneratePdf(signatureData, this.props.orderInfo);
        this.props.passPdf(pdf);
        this.props.nextPage();
      }
    } else {
      const randomID = stringGen(4);
      this.props.addOrderWizardData(this.props.orderInfo, randomID, reveal);
      this.props.nextPage();
    }

  }

  render() {
    var {reveal} = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12} lg={12}>
            {reveal == true ?  <SignaturePad clearButton="true" ref="mySignature"/> : <ImageDropForm>Reveal False</ImageDropForm>}
          </Col>
          <Col xs={12}>
            <button type="submit" className="btn btn-primary" onClick={this.props.previousPage}>Previous</button>
            <button type="submit" className="btn btn-primary" onClick={()=> {this.submit(reveal)}}>Submit</button>
          </Col>
        </Row>
      </Grid>

    );
  }
}

function mapStateToProps(state) {
  return {
    orderInfo: state.form.orderwizard.values
  }
}

export default connect(mapStateToProps, {addOrderWizardData, passPdf})(SignHere);
