/**
 * Created by gregorydrake on 7/15/16.
 */
import React from 'react';
import { reduxForm, Field, destoryForm } from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.guiltyOfCrime) {
        errors.guiltyOfCrime = 'Required'
    } else if (values.guiltyOfCrime == 'guilty') {
        errors.guiltyOfCrime = 'Please contact our office directly to discuss how to submit your application'
    }

    return errors
};

//Still need to destroy form somehow
const OrderFormThirdPage = (props) => {
    const { handleSubmit, previousPage, destroy } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label><h5>Statements Relating To Qualifications</h5></label>
                <div className="checkbox">
                   <label><Field name="guiltyOfCrime" type="radio" component="input" value="guilty"/>
                         A. I have been found guilty of a crime other than a Class C misdemeanor
                   </label>
                </div>

                <div className="checkbox">
                    <label><Field name="guiltyOfCrime" type="radio" component="input" value="notguilty"/>
                           B. I have not been found guilty of a crime other than a Class C misdemeanor
                    </label>
                </div>

            </div>

            <div>
                <label><h5>Statements Relating to Residency</h5></label>
                <div className="checkbox">
                    <label><Field name="texasResidency" type="radio" component="input" value="resident"/>
                        A. I am currently a resident of the state of Texas
                    </label>
                </div>

                <div className="checkbox">
                    <label><Field name="texasResidency" type="radio" component="input" value="nonresident"/>
                        B. I am not a resident of the state of Texas
                    </label>
                </div>
            </div>

            <div>
                <button type="button" className="btn btn-secondary" onClick={previousPage}>Previous</button>
                <button type="submit" className="btn btn-primary">Next</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'orderwizard',
    validate,
    destroyOnUnmount: false
})(OrderFormThirdPage)
