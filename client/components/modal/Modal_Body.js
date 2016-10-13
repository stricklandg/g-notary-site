/**
 * Created by gregorydrake on 8/15/16.
 */
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class ModalBody extends Component {

    render() {
        return(
            <Modal.Body>
                {this.props.children}
            </Modal.Body>
        )
    }
}

export default ModalBody;