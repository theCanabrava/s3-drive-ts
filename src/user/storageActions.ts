import { Storage, StorageFile } from '../aws';
import { baseActions } from './slice';
import { UserDispatch } from './store';
import handleApiAction from './handleApiAction';

export const listFiles = () =>
    async (dispatch: UserDispatch) =>
    handleApiAction(dispatch, async () =>
{
    dispatch(baseActions.overrideFiles(await Storage.listFiles()));
})

export const download = (file: StorageFile) =>
    async (dispatch: UserDispatch) =>
    handleApiAction(dispatch, async () =>
{
    await Storage.download(file);
})
    
export const remove = (file: StorageFile) =>
    async (dispatch: UserDispatch) =>
    handleApiAction(dispatch, async () =>
{
    await Storage.remove(file);
    dispatch(baseActions.overrideFiles(await Storage.listFiles()));
})

export const upload = (file: File | undefined) =>
    async (dispatch: UserDispatch) =>
    handleApiAction(dispatch, async () =>
{
    await Storage.upload(file);
    dispatch(baseActions.overrideFiles(await Storage.listFiles()));
})

