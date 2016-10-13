import React, { Component } from 'react';
import { connect } from 'react-redux';
import {destroy} from 'redux-form/lib/actions';
import {addTempBondToDB} from '../../events/actions/add_temp_bond_db';
import pageForward from '../../events/actions/pageForward';
import pageBack from '../../events/actions/pageBack';
import localforage from 'localforage';
import addInitialBondToCart from '../../events/actions/add_bond_to_order';
import addImageToDB from '../../events/actions/add_image_to_db';
var PDF = require('react-pdf')
var PDFJS = require('pdfjs-dist/build/pdf.combined');


class ConfirmForm extends Component {

    componentWillMount() {
        var { tempBondInfo, addTempBondToDB } = this.props;

        var existingSessionValue = localforage.getItem('sessionID');
        existingSessionValue.then((value) => {
            if (value == undefined) {
                throw new Error("No SessionID Found, Enable Cookies and Restart Form");
            } else {
                addTempBondToDB(tempBondInfo, value);
            }
        }).catch((e)=> {
        });


        //this is where we make the call to create a temporary bond and add the order to cart.
        //Also store pdf image with bond

    }
  //Returns canvas as jpeg base64 data uri
  confirmImg(sendToDbEvent, tempId){
    var canvas = document.getElementsByTagName("canvas");
    var image = canvas[0].toDataURL("image/jpeg", 0.68);
    sendToDbEvent(image, tempId);
  }

  confirmUplImg(sendToDbEvent, tempId, imageInState) {
      sendToDbEvent(imageInState, tempId)
  }

  render() {
      var { tempBondInfo, addInitialBondToCart, addImageToDB, tempId, reveal} = this.props;

    return(

      <div>
          {reveal ? <div><h4>Bond has been added to your cart would you like to continue shopping or check-out?</h4>
              <PDF file={this.props.pdf.pdf} scale={.89}/>
              <h5>Download a copy for your records</h5>
              <a className="btn btn-primary" href={`${this.props.pdf.pdf}`} download>Download</a>
              <button className="btn btn-default" onClick={()=> {this.props.pageBack()}}>Previous</button>
              <button className="btn btn-default" onClick={()=> {this.confirmImg(addImageToDB, tempId); this.props.pageForward(); addInitialBondToCart(tempBondInfo)}}>Next</button>
          </div> : <div>
              <button className="btn btn-default" onClick={()=> {this.props.pageBack()}}>Previous</button>
              <button className="btn btn-default" onClick={()=> {this.confirmUplImg(addImageToDB, tempId, this.props.pdf.pdf); this.props.pageForward(); addInitialBondToCart(tempBondInfo)}}>Next</button>
          </div>}
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
      pdf: state.formSignature,
      tempBondInfo: state.infoForTempBond,
      tempId: state.infoForTempBond.id,
      reveal: state.revealSelection.value
  };
}

export default connect(mapStateToProps, {destroy, addTempBondToDB, addImageToDB, pageForward, pageBack, addInitialBondToCart})(ConfirmForm);
