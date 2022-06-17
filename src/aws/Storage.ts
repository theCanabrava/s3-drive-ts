import { Amplify, Storage as S3 } from "aws-amplify";
import { saveAs } from "file-saver";
import { fileOpen } from 'browser-fs-access';
import { StorageWrapper } from "./types";

Amplify.configure(
    {
        Storage: {
            AWSS3: {
                bucket: 'nest-personal-drive',
                region: 'us-east-1'
            }
        }
    }
)

const Storage: StorageWrapper = 
{
    listFiles: async () =>
    {
        const files = await S3.list('', {level: 'private'});
        return files.map(f => ({key: f.key!, id: f.eTag! + f.key, name: f.key!}));
    },

    download: async (file) =>
    {
        const signedUrl = await S3.get(file.key, { level: 'private' });
        saveAs(signedUrl, file.name);
    },

    remove: async file =>
    {
        await S3.remove(file.key, {level: 'private'});
    },

    upload: async (file) =>
    {
        if(!file) file = await fileOpen();
        await S3.put(file.name, file, {level: 'private'});
    }
}

export default Storage