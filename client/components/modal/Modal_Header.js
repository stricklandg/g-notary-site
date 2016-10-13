/**
 * Created by gregorydrake on 8/15/16.
 */
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class ModalHeader extends Component {

    render() {
        var {product} = this.props;
        return( <Modal.Header>
            <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header> )
    }
}

export default ModalHeader;