/**
 * Created by gregorydrake on 6/15/16.
 */
import watchAddOrder from './add_order_saga';
import watchRegisterUser from './register_user_saga';
import addDBObserveeSaga from './add_db_observee_saga';
import watchSignInUser from './sign_in_user_saga';
import watchSignInNewUser from './sign_in_new_user_saga';
import watchMakeAdminUser from './make_admin_user_saga';
import watchSignOutUser from './sign_out_user_saga';
import watchCheckIfAdmin from './check_if_admin_saga';
import watchAddTempBond from './add_temp_bond_saga';
import watchCreditCardSuccessful from './credit_card_success_saga';
import watchAddPackageToCart from './add_package_to_cart';
import watchCart from './add_item_to_cart_saga';
import watchRemoveFromCart from './remove_item_from_cart_saga';
import watchfetchAddressSaga from './fetch_address_saga';
import watchProcessCreditCard from './process_credit_card_saga';
import watchAddImageToDB from './add_image_to_db_saga';
import watchSOSBatchSaga from './sos_batch_saga';
import watchPackageOrBondToRemoveFromCart from './remove_package_from_cart_sage';


export default function* rootSaga() {

    yield [
        watchAddOrder(),
        watchRegisterUser(),
        watchSignInUser(),
        watchSignInNewUser(),
        watchSignOutUser(),
        watchMakeAdminUser(),
        watchCheckIfAdmin(),
        watchAddTempBond(),
        watchCreditCardSuccessful(),
        watchCart(),
        watchAddPackageToCart(),
        watchRemoveFromCart(),
        watchPackageOrBondToRemoveFromCart(),
        watchfetchAddressSaga(),
        watchProcessCreditCard(),
        watchAddImageToDB(),
        watchSOSBatchSaga(),
        addDBObserveeSaga()
    ]
}