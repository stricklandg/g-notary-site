import React, { Component } from 'react';
import { connect } from 'react-redux';
import {arrayPush} from 'redux-form';
import removePackageOrBond from '../../../events/actions/remove_bond_package_from_cart';
import selectPackageType from '../../../events/actions/select_package_type';
import {clearImageFromState} from '../../../events/actions/add_up_image_to_state';
import PackageOrderForm from '../packageOrderWizard';
import triggerLoader from '../../../events/actions/trigger_loader';

import _ from 'lodash';

class PackageOrderFormContainer extends Component {
    constructor(props) {
        super(props);
        this.props.clearImageFromState();
        this.props.triggerLoader();
    }

    render() {
        let { packages, previousPage, onSubmit, reveal, tempBond, cart, addPackageToCart, removePackageOrBond, orderForm, selectPackageType,  notaryType} = this.props;
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
                                      tempBondId={tempBond.id}
                                      orderForm={orderForm}
                                      reveal={reveal}
                                      packageSelector = {selectPackageType}
                                      newOrRenewNotary = {notaryType}
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
        reveal: state.revealSelection["value"],
        notaryType: state.notaryType.value
    }
}

export default PackageOrderFormContainer = connect(mapStateToProps, { arrayPush, removePackageOrBond, selectPackageType, clearImageFromState, triggerLoader })(PackageOrderFormContainer);

