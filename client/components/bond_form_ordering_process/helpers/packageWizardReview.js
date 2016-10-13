/**
 * Created by gregorydrake on 8/2/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import pageReset from '../../../events/actions/pageReset';
import { addPackageWizardData } from '../../../events/actions/add_temp_bond_to_reducer';

//Still need to destroy form somehow
class PackageWizardReview extends Component {

    componentWillUnmount() {
        this.props.addPackageWizardData(this.props.packages[this.props.packageSelected.id]);
    }

    componentWillUpdate(nextProps) {
        const {trigger} = nextProps;
        if (trigger == true) {
            //add selector here for temporary bond
            this.props.pageReset();
        }
    }

    currentPackage(stateSlice) {
      return packages = this.props.packages[stateSlice]
    }

    render() {
        var {packageSelected} = this.props;
        const currentPackage = this.currentPackage(packageSelected.id);
        return (
            <div>
                <ul className="list-group">
                    {currentPackage == undefined ? (<li><p>Loading Data</p></li>) : (<li><p>
                        Package Selected: {currentPackage.name}
                    </p></li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        packageSelected : state.form.packageOrderForm.values.packageChosen,
        packages: state.packages
    }
}

let PackageWizardReviewFormExport = connect(mapStateToProps, {pageReset, addPackageWizardData })(PackageWizardReview);


export default PackageWizardReviewFormExport