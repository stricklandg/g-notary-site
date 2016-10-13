/**
 * Created by gregorydrake on 7/12/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import addObserveeToSaga from '../../events/actions/add_observee_to_saga';
import stopDBTracker from '../../events/actions/stop_db_tracker';
import _ from 'lodash';


class ProfileContainer extends Component {

    componentWillMount() {
        this.props.addObserveeToSaga([Meteor.users]);
    }

    componentWillUnmount() {
        this.props.stopDBTracker()
    }

    render() {
        let { profile } = this.props;
        return (
            <div>
                    <ul className="list-group">
                        {_.isEmpty(profile) ? <p>No one is logged in</p> : <div></div>}
                    </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        profile: state.profile,
    }
}

const ProfileContainment = connect(mapStateToProps,{ addObserveeToSaga, stopDBTracker })(ProfileContainer);

export default ProfileContainment;