/**
 * Created by gregorydrake on 7/15/16.
 */
import React, { Component } from 'react';
import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import OrderFormFirstPage from './orderWizardFirstPage';
import OrderFormSecondPage from './orderWizardSecondPage';
import OrderFormThirdPage from './orderWizardThirdPage';
import OrderFormRenewalFirstPage from './orderWizardRenewalFirstPage';
import PackageOrderFormContainer from '../packagesOrderingProcess/container/packageOrderWizardContainer';
import ShopForOrderForm from '../shop_ordering_process/shop';
import ReviewBond from './reviewBond';
import ConfirmForm from './confirm';
import pageForward from '../../events/actions/pageForward';
import pageBack from '../../events/actions/pageBack';


class OrderWizard extends Component {

    render() {
        const { isRenewal } = this.props;
        const { pageValue, pageForward, pageBack, administrator } = this.props;
        //AFTER PAGE 5 AND 6 we need a summary page
        return (
            <div className="jumbotron-body-wrapper">

                {isRenewal === 0 ? (pageValue === 1 && <PackageOrderFormContainer onSubmit={pageForward}/>) :
                    (pageValue === 1 && <OrderFormRenewalFirstPage onSubmit={pageForward}/>)}

                {isRenewal === 0 ? (pageValue === 2 && <OrderFormFirstPage previousPage={pageBack} onSubmit={pageForward}/>) :
                    (pageValue === 2 && <PackageOrderFormContainer previousPage={pageBack} onSubmit={pageForward}/>)}

                {isRenewal === 0 ? (pageValue === 3 && <OrderFormSecondPage previousPage={pageBack} onSubmit={pageForward}/>):
                    (pageValue === 3 && <OrderFormFirstPage previousPage={pageBack} onSubmit={pageForward}/>)}

                {isRenewal === 0 ? (pageValue === 4 && <OrderFormThirdPage previousPage={pageBack} onSubmit={pageForward}/>):
                    (pageValue === 4 && <OrderFormSecondPage previousPage={pageBack} onSubmit={pageForward}/>)}

                {isRenewal === 0 ? (pageValue === 5 && <ReviewBond isAdmin={administrator} previousPage={pageBack} onSubmit={pageForward}/>):
                    (pageValue === 5 && <OrderFormThirdPage previousPage={pageBack} onSubmit={pageForward}/>)}

                {isRenewal === 0 ? (pageValue === 6 && <ShopForOrderForm previousPage={pageBack} onSubmit={pageForward}/>):
                    (pageValue === 6 && <ReviewBond isAdmin={administrator} previousPage={pageBack} onSubmit={pageForward}/>)}

                {pageValue === 7 && <ShopForOrderForm />}


            </div>
        )
    }
}

const OrderWizardForm = reduxForm({
    form: 'orderwizard',
    destroyOnUnmount: false
})(OrderWizard);

let SelectingWizardForm = connect(
    state => {

        return {
            initialValues: {isRenewal: state.notaryType.value},
            isRenewal: state.notaryType.value,
            pageValue: state.paging.number,
            administrator: state.administrator,
        }
    }
, {pageForward, pageBack})(OrderWizardForm);


export default SelectingWizardForm;