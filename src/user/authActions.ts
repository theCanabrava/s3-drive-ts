import { Auth } from '../aws';
import { baseActions } from './slice';
import { UserDispatch } from './store';
import handleApiAction from './handleApiAction';

export const logout = () => 
    async (dispatch: UserDispatch) => 
    handleApiAction(dispatch, async () =>
{
    await Auth.signOut();
    dispatch(baseActions.authenticate({username: '', token: ''}));
    dispatch(baseActions.overrideFiles);
});

export const login = (username: string, password: string) => 
    async (dispatch: UserDispatch) => 
    handleApiAction(dispatch, async () =>
{
    const user = await Auth.signIn(username, password);
    dispatch(baseActions.authenticate(user));
});

export const restoreSession = () =>
    async (dispatch: UserDispatch) =>
    handleApiAction(dispatch, async () =>
{
    const user = await Auth.getUser();
    dispatch(baseActions.authenticate(user));
});

export const signUp = (
    username: string, 
    email: string, 
    password: string, 
    confirmPassword: string, 
    onSuccess: () => {}) =>
    async (dispatch: UserDispatch) =>
    handleApiAction(dispatch, async () =>
{
    await Auth.signUp(username, email, password, confirmPassword);
    onSuccess();
})

