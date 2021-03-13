const INITIAL_STATE = {
    currentUser: null
};

// If there's a new state passed in then it updated the state, otherwise it just applies the default initial state
const userReducer = (state = INITIAL_STATE, action) => {
    // Based off the action type, different logic is executed
    switch (action.type) {
        case 'SET_CURRENT_USER':
            // If the action type is the mentioned, then it returns a new state object with the new user object that will be associated with currentUser
            return {
                    ...state,
                    currentUser: action.payload
                };
        default:
            // Return the default state if there's no change
            return state;
    }
};

export default userReducer;