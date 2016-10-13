/**
 * Created by gregorydrake on 8/14/16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeObject from '../store/createStore';

var store = storeObject();
var newStore = store.store;

class ModalContainer extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement("div");
        this.modalTarget.className = 'modal';
        document.body.appendChild(this.modalTarget);
        this._render();
    }

    componentWillUpdate() {
        this._render();
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget);
        document.body.removeChild(this.modalTarget);
    }

    _render() {
        ReactDOM.render(
            <Provider store={newStore}>
            <div>{this.props.children}</div>
            </Provider>,
            this.modalTarget
        );
    }

    render() {
        return <noscript />;
    }
}

export default ModalContainer;