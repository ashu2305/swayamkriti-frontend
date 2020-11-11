export default function rootReducer(state, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case 'LOGIN':
        case 'ONBOARD':
            localStorage.setItem('FBIdToken',  `${payload}`);
            return {
                ...state,
                token: payload,
                isAuth: true        
            }
        case 'LOGOUT':
            localStorage.removeItem('FBIdToken')
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,             
            }
        case 'UPDATE' : 
            return{
                ...state,
                user: payload
            }

        default:
            return state
    }
}