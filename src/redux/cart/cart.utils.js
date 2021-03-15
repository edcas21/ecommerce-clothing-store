// Utility functions that keep files clean and organize functions that may be needed in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {

    // Check if the item to add already is already in the cart
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    // If it's already in the cart
    if (existingCartItem) {
        return cartItems.map(
            // cartItem that is going to have it's quantity increased since the user is adding more than one of the exact item
            cartItem => 
                // If the ids match
                cartItem.id === cartItemToAdd.id ? 
                // increase the quantity of the cart item
                { ...cartItem, quantity: cartItem.quantity + 1} 
                : 
                // If not then just return the item with it's original quantity
                cartItem);
    }

    // If there's no repeated items being added, then just return a new instance of the item
    return [...cartItems, { ...cartItemToAdd, quantity: 1}];
};