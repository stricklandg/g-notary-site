/**
 * Created by gregorydrake on 8/21/16.
 */
import React, { Component, PropTypes } from 'react'
import MIStamp from '../../modal/MIStamp';
import {ModalBodyConstructor} from '../../modal/MIEO';
import {ModalBodyConstructorStamp} from '../../modal/MIStamp';
import {ModalBodyConstructorDeskSign} from '../../modal/MIDesk';
import WrapperFactory from '../../modal/Modal_Wrapper';


export default function modalSwitch(productType, product) {
    var modalComponent = null;
    //This determines which function is calling it.
    switch (productType) {
        case "eo":
        var initialValues = {notregistered: false, hasExistingNotaryInfo: false, donotremember: false};
        var formName = "mieo";

            return (<WrapperFactory product={this.props.product}
                                    closeAction={this.closeModal}
                                    actionCreator={this.props.onClickAction}
                                    initialValues={initialValues}
                                    formName={formName}>{ModalBodyConstructor(formName)}</WrapperFactory>);
            break;
        case "supplies":
           switch(product.name) {
               case "Desk Sign":
                    var initialValues = {notaryname: ""};
                    var formName = "midesk";

                    return (<WrapperFactory product={this.props.product}
                                            closeAction={this.closeModal}
                                            actionCreator={this.props.onClickAction}
                                            initialValues={initialValues}
                                            formName={formName}>{ModalBodyConstructorDeskSign(formName)}</WrapperFactory>);
                    break;
               default:
                   var initialValues = {notregistered: false, hasExistingNotaryInfo: false};
                   var formName = "mistamp";

                   return (<WrapperFactory product={this.props.product}
                                           closeAction={this.closeModal}
                                           actionCreator={this.props.onClickAction}
                                           initialValues={initialValues}
                                           formName={formName}>{ModalBodyConstructorStamp(formName)}</WrapperFactory>);
                   break;
            }
            break;
        case "bonds":
            return modalComponent;
            break;
        default:
    }
}