import React, {useContext, useEffect} from 'react';
import Store from '../../store/store';
import {Redirect } from 'react-router-dom';

const Logout=()=> {

    const{state,dispatch} = useContext(Store);
    useEffect(() => {
        if(state.isAuth){
            dispatch({
                type : 'LOGOUT'
            });
        }
        if(state.isAuthAdmin){
            dispatch({
                type : 'LOGOUTADMIN'
            });
        }    
    });
    
    return <Redirect to='/login' />;
}

export default Logout
