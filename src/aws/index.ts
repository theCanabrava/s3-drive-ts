import CognitoAuth from "./CognitoAuth";
import S3Storage from "./S3Storage";
import { AuthWrapper, StorageWrapper } from "./types";

export const Auth: AuthWrapper = CognitoAuth;
export const Storage: StorageWrapper = S3Storage;