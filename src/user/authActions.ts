import { Auth } from '../aws';
import { baseActions } from './slice';
import { RootState, UserDispatch } from './store';
import handleApiAction from './handleApiAction';

export const logout = () => 
    async (dispatch: UserDispatch) => 
    handleApiAction(dispatch, async () =>
{
    await Auth.signOut();
    dispatch(baseActions.authenticate({username: '', token: ''}));
    dispatch(baseActions.overrideFiles);
});

export const login = (username: string, password: string, onSuccess: () => void) => 
    async (dispatch: UserDispatch) => 
    handleApiAction(dispatch, async () =>
{
    const user = await Auth.signIn(username, password);
    dispatch(baseActions.authenticate(user));
    onSuccess();
});

export const restoreSession = (onFaillure: () => void) =>
async (dispatch: UserDispatch, getState: () => RootState) =>
{
    try
    {
        const user = await Auth.getUser();
        dispatch(baseActions.authenticate(user));
    }
    catch(err)
    {
        onFaillure();
    }
};

export const signUp = (form: SignUpForm, onSuccess: () => void) =>
    async (dispatch: UserDispatch) =>
    handleApiAction(dispatch, async () =>
{
    const { username, email, password, confirmPassword } = form;
    await Auth.signUp(username, email, password, confirmPassword);
    onSuccess();
})

type SignUpForm =
{
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}
