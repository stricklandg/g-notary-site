import React, { Component } from 'react';
import { connect } from 'react-redux';
import {destroy} from 'redux-form/lib/actions';
import {addTempBondToDB} from '../../events/actions/add_temp_bond_db';
import addPackageToCart from '../../events/actions/add_package';
import pageForward from '../../events/actions/pageForward';
import pageBack from '../../events/actions/pageBack';
import localforage from 'localforage';
import addInitialBondToCart from '../../events/actions/add_bond_to_order';
import addImageToDB from '../../events/actions/add_image_to_db';
var PDF = require('react-pdf')
var PDFJS = require('pdfjs-dist/build/pdf.combined');


class ConfirmForm extends Component {

    componentWillMount() {
        var { tempBondInfo, addTempBondToDB, addPackageToCart, packageType, cart, orderForm, reveal } = this.props;

        var existingSessionValue = localforage.getItem('sessionID');
        existingSessionValue.then((value) => {
            if (value == undefined) {
                throw new Error("No SessionID Found, Enable Cookies and Restart Form");
            } else {
                const addInfoPackage = { packageType, cart, tempBondInfo, orderForm, reveal };
                addTempBondToDB(tempBondInfo, value, addInfoPackage);
            }
        }).catch((e) => {
        });


        //this is where we make the call to create a temporary bond and add the order to cart.
        //Also store pdf image with bond

    }
  //Returns canvas as jpeg base64 data uri
  confirmImg(sendToDbEvent, tempBond){
    var canvas = document.getElementsByTagName("canvas");
    var image = canvas[0].toDataURL("image/jpeg", 0.68);
    sendToDbEvent(image, tempBond);
  }

  confirmUplImg(sendToDbEvent, tempBond, imageInState) {
      sendToDbEvent(imageInState, tempBond)
  }

  render() {
      var { tempBondInfo, addInitialBondToCart, addImageToDB, tempId, reveal } = this.props;

    return(

      <div>
          {reveal ? <div><h4>Bond has been added to your cart would you like to continue shopping or check-out?</h4>
              <PDF file={ this.props.pdf.pdf } scale={.89}/>
              <button className="btn btn-default" onClick={()=> {this.props.pageBack()}}>Previous</button>
              <button className="btn btn-default" onClick={()=> {this.confirmImg(addImageToDB, tempBondInfo); this.props.pageForward(); addInitialBondToCart(tempBondInfo)}}>Next</button>
          </div> : <div>
              <button className="btn btn-default" onClick={()=> {this.props.pageBack()}}>Previous</button>
              <button className="btn btn-default" onClick={()=> {this.confirmUplImg(addImageToDB, tempBondInfo, this.props.pdf.pdf); this.props.pageForward(); addInitialBondToCart(tempBondInfo)}}>Next</button>
          </div>}
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
      pdf: state.formSignature,
      tempBondInfo: state.infoForTempBond,
      cart: state.cart,
      orderForm: state.form.orderwizard.values,
      packageType: state.packageType.value,
      reveal: state.revealSelection.value
  };
}

export default connect(mapStateToProps, {destroy, addTempBondToDB, addImageToDB, pageForward, pageBack, addPackageToCart, addInitialBondToCart})(ConfirmForm);
