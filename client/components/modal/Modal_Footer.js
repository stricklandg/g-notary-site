/**
 * Created by gregorydrake on 8/15/16.
 */
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { startSubmit } from 'redux-form';

class ModalFooter extends Component {

    render() {
        var {closeAction, handleSubmit, product, actionCreator} = this.props;
        return( <Modal.Footer>
            <form onSubmit={handleSubmit(
                (value) => {
                   actionCreator({productId: product._id, addInfo: value});
                   closeAction();
                }
            )}>
            <Button onClick={()=>closeAction()}>Close</Button>
            <Button type='submit' bsStyle="primary">Add to Cart</Button>
            </form>
        </Modal.Footer> )
    }
}

export default ModalFooter;