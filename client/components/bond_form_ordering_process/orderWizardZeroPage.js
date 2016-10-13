/**
 * Created by gregorydrake on 7/16/16.
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderButtons from './renderFieldForButtons';

const OrderFormZeroPage = (props) => {
    const { handleSubmit, value } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label><h4>Choose one of the two options below to get started:</h4></label>
                <Field name="isRenewal" id="isRenewal" type="input" component={renderButtons}/>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'orderwizard',
    destroyOnUnmount: false
})(OrderFormZeroPage)