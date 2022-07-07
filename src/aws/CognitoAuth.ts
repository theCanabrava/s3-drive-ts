import { Amplify, Auth as Cognito } from "aws-amplify";
import Env from "./Env";
import { AuthWrapper } from "./types";

Amplify.configure(
    {
        Auth:
        {
            identityPoolId: Env.identityPoolId,
            region: Env.region,
            userPoolId: Env.userPoolId,
            userPoolWebClientId: Env.userPoolWebClientId,
            mandatorySignIn: false
        }
    }
)

const CognitoAuth: AuthWrapper =
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

export default CognitoAuth;