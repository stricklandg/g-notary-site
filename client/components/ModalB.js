/**
 * Created by gregorydrake on 8/15/16.
 */
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


class ModalContainerB extends Component {

    render() {
       return( <div className="static-modal">
           <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Additional Items</Modal.Title>
            </Modal.Header>

           <Modal.Body>
               {this.props.children}
           </Modal.Body>

           <Modal.Footer>
               <Button>Close</Button>
               <Button bsStyle="primary">Add to Cart</Button>
           </Modal.Footer>
           </Modal.Dialog>
        </div> )
    }
}

export default ModalContainerB;