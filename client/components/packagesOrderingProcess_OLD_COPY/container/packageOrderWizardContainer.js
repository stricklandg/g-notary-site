import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPackageToCart from '../../../events/actions/add_package';
import removePackageOrBond from '../../../events/actions/remove_bond_package_from_cart';
import {packageOrderForm as PackageOrderForm} from '../packageOrderWizard';

import _ from 'lodash';

class PackageOrderFormContainer extends Component {
    render() {
        let { packages, previousPage, onSubmit, reveal, tempBond, cart, addPackageToCart, removePackageOrBond, orderForm } = this.props;
        let packagesArray = _.values(packages);
        if (packagesArray.length == 0) {
            return <div>Loading Content</div>
        } else {
            return (
                    <PackageOrderForm packages={packagesArray}
                                      cart={cart}
                                      previousPage={previousPage}
                                      removePackageOrBond={removePackageOrBond}
                                      onSubmit={onSubmit}
                                      addToCart={addPackageToCart}
                                      tempBondId={tempBond.id}
                                      orderForm={orderForm}
                                      reveal={reveal}
                    />
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        packages: state.packages,
        cart: state.cart,
        tempBond: state.infoForTempBond,
        orderForm: state.form.orderwizard.values,
        reveal: state.revealSelection["value"]
    }
}

export default PackageOrderFormContainer = connect(mapStateToProps, { addPackageToCart, removePackageOrBond })(PackageOrderFormContainer);

