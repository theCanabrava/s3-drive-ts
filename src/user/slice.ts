import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StorageFile, CognitoUser } from '../aws';

type UserState =
{
    username: string,
    token: string,
    status: 'idle' | 'loading' | 'error',
    files: StorageFile[]
}

const initialState: UserState =
{
    username: '',
    token: '',
    status: 'idle',
    files: []
}

const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers:
        {
            wait: s => { s.status = 'loading'; },
            break: s => { s.status = 'error'; },
            authenticate: (state, action: PayloadAction<CognitoUser>) =>
            {
                state.username = action.payload.username;
                state.token = action.payload.token;
            },
            overrideFiles: (state, action: PayloadAction<StorageFile[]>) =>
            {
                state.files = action.payload;
            }
        }
    }
)

export const baseActions = userSlice.actions;
export const userReducer = userSlice.reducer;