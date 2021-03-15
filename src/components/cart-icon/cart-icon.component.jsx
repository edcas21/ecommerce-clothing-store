import { div } from 'prelude-ls';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Importing the shopping icon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

// Gives acces to action that toggles the cart
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Gives this component access to props in the the state
const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemsCount
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);