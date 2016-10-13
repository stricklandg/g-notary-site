/**
 * Created by gregorydrake on 6/8/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ConnectedSignUpForm from './accounts/sign-up';
import SignInForm from './accounts/sign-in';
import Account from './accounts/account';
import SuccessfulAccountCreation from './accounts/successfulAccountCreation';
import SelectingWizardForm from './bond_form_ordering_process/orderWizard';
import MainJumbo from './homepage_jumbotron';
import PackageOrderFormContainer from './packagesOrderingProcess/container/packageOrderWizardContainer';
import Shop from './shop/shop';
import Message from './shop/pleaseSelect';
import StoreListViews from './shop/shopListContainer';
import SelectedItemContainer from './shop/containers/SelectedItemContainer';
import AdminContainer from './accounts/admin_panel/adminContainer';
import AddOrderContainer from './accounts/admin_panel/addOrderContainer';
import AdminOrderListContainer from './accounts/admin_panel/adminOrderList';
import ShopForOrderForm from './shop_ordering_process/shop';
import ReviewBond from './bond_form_ordering_process/reviewBond';
import BondOrderContainer from './accounts/bond_order';
import OrderDetailsAdminContainer from './accounts/bond_order-admin';
import AddSearchForm from './bond_form_ordering_process/helpers/GoogleAddressAutoFill';
import SelectedOrderContainer from './accounts/admin_panel/containers/adminOrderSelectedContainer';
import SuccessfulOrder from './shoppingCart/successfulOrder';

import UserContainer from './accounts/user_accounts/userContainer';
import UserOrderListContainer from './accounts/user_accounts/userOrderList';
import UserSelectedOrderContainer from './accounts/user_accounts/containers/userOrderSelectedContainer';


/* Shopping Cart Imports */
import CreditCard from './shoppingCart/payment_processing';
import CartWrapper from './shoppingCart/CartWrapper';
import CartContainer from './shoppingCart/container/CartContainer';
import LogInSignUp from './shoppingCart/LoginSignUp';
import authorizeRouteForCredit from './shoppingCart/container/require_authentication_user_cart';
/*----------------------*/

import SignHere from './bond_form_ordering_process/signhere';
import ConfirmHere from './bond_form_ordering_process/confirm';

import authorizedRoute from './accounts/higher_order_component/require_authentication';

import authorizeUserRoute from './accounts/higher_order_component/require_authentication_user';


import App from '../app';

function redirectStore(nextState, replaceState) {
    replaceState({ nextPathname: nextState.location.pathname }, '/shopform/supplies')
}

export default (

    <Route path="/" component={App}>
        <IndexRoute component={MainJumbo}/>

        <Route path="/testForm" component={ReviewBond} />

        <Route path="order">
            <Route path="notary" component={SelectingWizardForm}>
                <Route path="package-type" component={PackageOrderFormContainer} />
            </Route>
        </Route>

        <Route path="shopform" component={ShopForOrderForm}>
            <Route path=":id" component={StoreListViews}>
                <IndexRoute component={Message}/>
                <Route path=":id" component={SelectedItemContainer}/>
            </Route>
        </Route>

        <Route path="signhere" component={SignHere} />
        <Route path="confirm" component={ConfirmHere} />

        <Route path="shop" component={Shop}>
            <Route path=":id" component={StoreListViews}>
                <IndexRoute component={Message}/>
                <Route path=":id" component={SelectedItemContainer}/>
            </Route>
        </Route>

        <Route path="signup" component={ConnectedSignUpForm} />
        <Route path="signin" component={SignInForm} />

        <Route path="cart" component={CartWrapper}>
            <IndexRoute component={CartContainer}/>
            <Route path="payment" component={authorizeRouteForCredit(CreditCard)} />
            <Route path="lredirect" component={LogInSignUp} />
            <Route path="signup" component={ConnectedSignUpForm} />
            <Route path="signin" component={SignInForm} />
        </Route>

        <Route path="acsuccess" component={SuccessfulAccountCreation} />

        <Route path="ordersuccess" component={SuccessfulOrder} />

        <Route path="adminpanel" component={authorizedRoute(AdminContainer)}>
            <IndexRoute component={AdminOrderListContainer}/>
            <Route path="addorder" component={AddOrderContainer}/>
            <Route path=":id" component={SelectedOrderContainer}/>
        </Route>

        <Route path="userpanel" component={authorizeUserRoute(UserContainer)}>
            <IndexRoute component={UserOrderListContainer}/>
            <Route path=":id" component={UserSelectedOrderContainer}/>
        </Route>

        <Route path="search" component={AddSearchForm} />
        <Route path="*" />

    </Route>
);

//The index route within account will be for the account home that will list links to the other three routes
