/**
 * Created by gregorydrake on 8/15/16.
 */
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import ModalHeader from './Modal_Header';
import ModalBody from './Modal_Body';
import ModalFooter from './Modal_Footer';

class OuterWrapper extends Component {

        constructor(props) {
            super(props);

            this.buildModal = this.buildModal.bind(this);
        }

        buildModal(additionalProps) {

            class ModalWrap extends Component {

            render() {
                return ( <div className="static-modal">
                    <Modal.Dialog>
                        <ModalHeader product={additionalProps.product}/>
                        <ModalBody>
                            {this.props.children}
                        </ModalBody>
                        <ModalFooter handleSubmit={this.props.handleSubmit} closeAction={additionalProps.closeAction}
                                     actionCreator={additionalProps.actionCreator} product={additionalProps.product}/>
                    </Modal.Dialog>
                </div> )
            };
        }

        var ModalForm = reduxForm({
            form: `${additionalProps.formName}`,
            initialValues: additionalProps.initialValues
        })(ModalWrap);

        return (<ModalForm>{this.props.children}</ModalForm>)
    }

    render() {
       return( <div>{this.buildModal(this.props)}</div>)
    }
}

class WrapperFactory extends Component {

    render() {
        return (
            <OuterWrapper {...this.props}>{this.props.children}</OuterWrapper>
        );
    }

}

export default WrapperFactory