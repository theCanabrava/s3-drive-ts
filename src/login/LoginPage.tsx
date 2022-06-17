import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../shared/components/Loading';
import { actions, useUserDispatch, useUserSelector } from '../user';
import useLoginStyles from './useLoginStyles';

const LOGIN_INPUT = 'login';
const PASSWORD_INPUT = 'pass';

const LoginPage = () =>
{
    const status = useUserSelector(s => s.status);
    const dispatch = useUserDispatch();
    const navigate = useNavigate();
    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const classes = useLoginStyles();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        dispatch(actions.login(login, password, () =>
        {
            navigate('/drive')
        }))
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.box}>
                <label htmlFor={LOGIN_INPUT} className={classes.label}>
                    Login:
                </label>
                <input 
                    id={LOGIN_INPUT} 
                    type="text" 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)}
                    className={classes.input}
                />
                <label htmlFor={PASSWORD_INPUT} className={classes.label}>
                    Password:
                </label>
                <input 
                    id={PASSWORD_INPUT} 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.input}
                />
                {
                    status === 'loading' ?
                    <Loading/> :
                    <>
                        <input 
                            type="submit" 
                            value="LOG IN"
                            className={classes.button}
                        />
                        <button 
                            className={classes.bottomButton}
                            onClick={() => navigate('/sign-up')}
                        >
                            SIGN UP
                        </button>
                    </>
                }
            </form>
        </div>
    )
}

export default LoginPage;