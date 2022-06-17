import { useEffect } from 'react';
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

type AppWrapperProps = { children: any };
const AuthWatcher = () =>
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

const AppWrapper = ({children}: AppWrapperProps) =>
{
    return (
        <Provider store={store}>
            <AuthWatcher/>
            {children}
        </Provider>
    )
}

export default AppWrapper;