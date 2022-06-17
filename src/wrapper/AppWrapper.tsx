import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {
    useNavigate,
    useLocation
} from "react-router-dom";
import { 
    actions, 
    useUserDispatch, 
    useUserSelector, 
    store 
} from '../user';

export const AuthWatcher = () =>
{
    const { token } = useUserSelector(s => s);
    const dispatch = useUserDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() =>
    {
        if(token === '') dispatch(actions.restoreSession(() =>
        {
            if(pathname !== '/sign-up') navigate('/login');
        }))
    }, [token]);

    return null;
}

const AppWrapper: React.FC<{children: JSX.Element}> = ({children}) =>
{
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default AppWrapper;