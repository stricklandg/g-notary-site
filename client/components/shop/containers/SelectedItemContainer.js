/**
 * Created by gregorydrake on 7/20/16.
 */
/**
 * Created by gregorydrake on 6/22/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../../../events/actions/add_to_cart';
import {getSelectedItemsContents} from '../../../selector/selector_slices/selected_shop_item_container_selector';
import SelectedItem from '../SelectedItem';
import _ from 'lodash';

//params are accessible on this components props
class SelectedStoreItem extends Component {

    render() {
        let { selectedShopItem, addToCart, params } = this.props;
        return (
            <div>
                {!_.isEmpty(selectedShopItem) ? <SelectedItem product={selectedShopItem} onClickAction={addToCart} category={params.id[0]}/> : <div> Select an item </div>}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        selectedShopItem: getSelectedItemsContents(state, ownProps)
            }
}

const SelectedItemContainer = connect(mapStateToProps, {addToCart})(SelectedStoreItem);

export default SelectedItemContainer;