/**
 * Created by gregorydrake on 7/20/16.
 */
/**
 * Created by gregorydrake on 7/20/16.
 */
import React, { Component } from 'react';
import ShopList from './shopList';
import { connect } from 'react-redux';

import categorySwitch from './containers/helper_functions/categorySwitcher';


import _ from 'lodash';

class StoreListView extends Component {

    render() {
        var {params, children, categoryToRender, baseURI} = this.props;

        const nameOfFunction = 'render';
        var category = categorySwitch(params, nameOfFunction);

        let productsArray = _.values(categoryToRender);

        return (
            <div className="row">
                    <ShopList params={params} children={children} products={productsArray} baseURI={baseURI} category={category} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const nameOfFunction = 'mapStateToProps';
    const uRLParams = ownProps.params;
    const baseURI = ownProps.location.pathname.match(/[^\/](\w+)*/g);
    var valueReturnedFromSwitch = categorySwitch(uRLParams, nameOfFunction);
    return {
        categoryToRender: state[valueReturnedFromSwitch],
        baseURI
            }
}

var StoreListViews = connect(mapStateToProps, null)(StoreListView);

export default StoreListViews