/**
 * Created by gregorydrake on 9/6/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import localforage from 'localforage';

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            var promise = localforage.getItem('isUser');
            promise.then((value) => {
                if (value == true ) {
                } else {
                    if (this.props.user == false) {
                        this.context.router.push('/cart/lredirect')
                    }
                }

            })

        }

        componentWillUpdate(nextProps) {
            if (nextProps.user == false) {
                this.context.router.push('/cart/lredirect');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { user: state.signedIn.signedIn };
    }

    return connect(mapStateToProps, null)(Authentication);
}