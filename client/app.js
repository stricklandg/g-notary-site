/**
 * Created by gregorydrake on 6/8/16.
 */
import React, { Component } from 'react';
import Header from './components/header';
import localforage from 'localforage';
import { connect } from 'react-redux';
import Supplies from '../lib/collections/supplies';
import EOCoverage from '../lib/collections/eocoverage';
import Packages from '../lib/collections/packages';
import subscribe from 'react-meteor-subscribe';
import addObserveeToSaga from './events/actions/add_observee_to_saga';
import stopDBTracker from './events/actions/stop_db_tracker';

class Base extends Component {

    componentWillMount() {
        this.props.addObserveeToSaga([Supplies, EOCoverage, Packages])
    }

    componentWillUnmount() {
        this.props.stopDBTracker();
    }

    componentWillReceiveProps(nextProps) {

        localforage.setItem("sessionID", nextProps.sessionID, function (err, value) {
        })
    }

    render() {
        return (
            <div className="contains-it-all">
                <div classID="OutBox">
                    <div className="paddtron">
                    <Header />
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sessionID: state.session._id
    }
}

let mapStateSubscriptionsToProps = (props) => {
    return {
        ['supplies']: [],
        ['eo']: [],
        ['packages']: []
    }
};

var App = connect(mapStateToProps, {addObserveeToSaga, stopDBTracker})(subscribe(mapStateSubscriptionsToProps)(Base));

export default App
