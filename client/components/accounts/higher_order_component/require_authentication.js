import React, { Component } from 'react';
import { connect } from 'react-redux';
import checkIfAdmin from '../../../events/actions/check_if_admin';
import localforage from 'localforage';

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            var promise = localforage.getItem('isSuperHero');
            promise.then((value) => {
            if (value == 'true') {
            } else {
                if (!this.props.administrator) {
                    this.context.router.push('/')
                }
            }

            })

        }

        componentWillUpdate(nextProps) {
            if (!nextProps.administrator) {
                this.context.router.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { administrator: state.administrator };
    }

    return connect(mapStateToProps, {checkIfAdmin})(Authentication);
}