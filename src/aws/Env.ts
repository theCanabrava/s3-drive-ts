const Env =
{
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID || 'not-set',
    region: process.env.REACT_APP_REGION || 'not-set',
    userPoolId: process.env.REACT_APP_USER_POOL_ID || 'not-set',
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID || 'not-set'
}

export default Env