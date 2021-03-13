// Funciton that returns an action object with the 
export const setCurrentUser = user => ({
    // Action identifying key
    type: 'SET_CURRENT_USER',
    // The payload which is the new user the userReducer state slice will be updated with
    payload: user
});