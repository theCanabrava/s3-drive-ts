import { baseActions } from './slice';
import { UserDispatch } from './store';

const handleApiAction = async (dispatch: UserDispatch, callback: () => Promise<void>) =>
{
    try
    {
        dispatch(baseActions.wait());
        await callback();
        dispatch(baseActions.ready());
    }
    catch(err)
    {
        console.error(err);
        dispatch(baseActions.break());
    }
}

export default handleApiAction;