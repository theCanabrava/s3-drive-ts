import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../shared/components/Loading';
import { actions, useUserDispatch, useUserSelector } from '../user';
import useLoginStyles from './useLoginStyles';

const USERNAME_INPUT = 'username';
const EMAIL_INPUT = 'email';
const PASSWORD_INPUT = 'pass';
const CONFIRM_INPUT = 'confirm';

const SignUpPage = () =>
{
    const status = useUserSelector(s => s.status);
    const dispatch = useUserDispatch();
    const navigate = useNavigate();
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirm, setConfirm ] = useState('');
    const classes = useLoginStyles();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        dispatch(actions.signUp({username, email, password, confirmPassword: confirm}, () =>
        {
            navigate('/login');
        }));
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.box}>
                <label htmlFor={USERNAME_INPUT} className={classes.label}>
                    Username:
                </label>
                <input 
                    id={USERNAME_INPUT} 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    className={classes.input}
                />
                <label htmlFor={EMAIL_INPUT} className={classes.label}>
                    Email:
                </label>
                <input 
                    id={EMAIL_INPUT} 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
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
                <label htmlFor={PASSWORD_INPUT} className={classes.label}>
                    Confirm Password:
                </label>
                <input 
                    id={CONFIRM_INPUT} 
                    type="password" 
                    value={confirm} 
                    onChange={(e) => setConfirm(e.target.value)}
                    className={classes.input}
                />
                {
                    status === 'loading' ?
                    <Loading/> :
                    <>
                        <input 
                            type="submit" 
                            value="SIGN UP"
                            className={classes.button}
                        />
                    </>
                }
            </form>
        </div>
    )
}

export default SignUpPage;