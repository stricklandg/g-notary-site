import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageHolder extends Component {
    render() {
        var {category} = this.props;
        return (
            <div className="col-xs-8">
                {category == "eo" ? <p>Notary Errors & Omissions (E&O) insurance protects you as the notary if a claim is made against you.
                    A notary public is an official appointed position by the Secretary of State’s office. The State requires that a notary public obtain a notary bond prior to their appointment. The bond ensures that if the official violates the public trust through negligence of their duties, funds are available to reimburse the State for its loss.
                    Your primary responsibility as a notary public is to validate that the individual parties to a contract are who they claim to be. The State may suffer a loss if the notary fails to properly confirm the identities of the parties.
                    The notary bond protects the public, not the notary. E&O insurance coverage is available to protect you and is offered for a nominal amount by J.P. Everhart.
                </p> : <p>Be ready for any client's needs with our excellent selection of Notary Public Supplies.  Click any product on the left to get started.  Once you have found
                    what you're looking for, simply add it to your cart and checkout or keep shopping.  Don't be caught unprepared, get your Notary Public Supplies today!
                </p>}
            </div>
        )
    }
};

function mapStateToProps(state, ownProps) {
    const uRLParams = ownProps.params;
    return {
        category: uRLParams.id
    }
}


var Message = connect(mapStateToProps, null)(MessageHolder);
export default Message
