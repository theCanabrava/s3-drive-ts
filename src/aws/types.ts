export type AuthWrapper =
{
    signIn: (username: string, password: string) => Promise<CognitoUser>,
    signOut: () => Promise<void>,
    getUser: () => Promise<CognitoUser>,
    signUp: (username: string, email: string, password: string, confirmPassword: string) => Promise<void>
}

export type CognitoUser =
{
    username: string,
    token: string
}

export type StorageWrapper =
{
    listFiles: () => Promise<StorageFile[]>,
    download: (file: StorageFile) => Promise<void>,
    remove: (file: StorageFile) => Promise<void>,
    upload: (file: File | undefined) => Promise<void>
}

export type StorageFile =
{
    id: string,
    name: string,
    key: string
}
