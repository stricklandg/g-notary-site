/**
 * Created by gregorydrake on 7/20/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';


class NavigationForStore extends Component {
    renderLinks() {
            var orderFormArray = [];

        if (this.props.selectedPackage == undefined) {
            return <div>Something has gone wrong</div>
        }

        if (this.props.selectedPackage.match(/[B]|[D]|[E]/)) {
            //Definitely ensure the user's account section is displayed, if user is signed in
            const eoLink = <li className="nav-item" key='2'>
                <Link className="nav-link active" to="/shopform/eo" >E&O Coverage</Link>
            </li>
            orderFormArray.push(eoLink);

        }
            var suppliesLink = <li className="nav-item" key='1'>
                <Link className="nav-link active" to="/shopform/supplies">Supplies</Link>
            </li>

            orderFormArray.push(suppliesLink);

            return orderFormArray

        }

    render() {
        return (
            <nav className="navbar">
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedPackage: state.form.orderwizard.values.packageChosen.packageType,
    }
}

var NavigationStoreForm = connect(mapStateToProps,null)(NavigationForStore);

export default NavigationStoreForm;