const initialState = {
    username: '',
    password: '',
    snackBarOpen: false,
    snackBarVariant: 'error',
    snackBarMessage: 'Please fill up the username/password before submitting the form'
};

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload
            };
        case 'CALL_SNACKBAR':
            return {
                ...state,
                snackBarOpen: action.payload
            }
        default:
            return state;
    }
}