import { createContext } from 'react';

const ltoken = (localStorage.getItem('FBIdToken') !== null)?true:false ;
const admin = (localStorage.getItem('isAdmin') !== null)?true:false ;

const Context = createContext({
    user: null ,
    isAuth: (ltoken)?true:false,
    token: localStorage.FBIdToken,
    isAuthAdmin: (admin)? true:false
})

export default Context;