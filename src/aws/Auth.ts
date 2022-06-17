import { Amplify, Auth as Cognito } from "aws-amplify";
import { AuthWrapper } from "./types";

Amplify.configure(
    {
        Auth:
        {
            identityPoolId: 'us-east-1:64466f8d-1dd9-43ed-9f89-2bfde880460e',
            region: 'us-east-1',
            userPoolId: 'us-east-1_gabxNaveu',
            userPoolWebClientId: '5m93kk6un7tgs5g5cra1imem6r',
            mandatorySignIn: false
        }
    }
)

const Auth: AuthWrapper =
{
    signIn: async (username, password) =>
    {
        const user = await Cognito.signIn(username, password);
        return getCognitoUser(user);
    },

    signOut: async () =>
    {
        await Cognito.signOut();
    },

    getUser: async () =>
    {
        return getCognitoUser(await Cognito.currentAuthenticatedUser());
    },

    signUp: async (username, email, password, confirmPassword) => 
    {
        if(password !== confirmPassword) throw new Error('Passwords do not match');

        await Cognito.signUp({
            username,
            password,
            attributes: {
                email,      
            }
        });
    }
}

const getCognitoUser = (user: any) => 
(
    {
        username: user.username, 
        token: user.signInUserSession.accessToken.jwtToken
    }
);

export default Auth;