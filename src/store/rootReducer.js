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
        case 'ONBOARDLOGIN':
            localStorage.setItem('FBIdToken',  `${payload}`);
            localStorage.setItem('isAdmin',  "hello");
            //console.log("hello user");
            return {
                ...state,
                token: payload,
                isAuthAdmin: true        
            }
        case 'LOGOUT':
            localStorage.removeItem('FBIdToken')
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,             
            }
        case 'LOGOUTADMIN':
            localStorage.removeItem('FBIdToken')
            localStorage.removeItem('isAdmin')
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,
                isAuthAdmin: false             
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