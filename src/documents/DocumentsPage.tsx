import React, { useEffect, useCallback } from 'react';
import { actions, useUserDispatch, useUserSelector } from '../user';
import Table from './Table';
import useDocumentsStyles from './useDocumentsStyles';
import {useDropzone} from 'react-dropzone'

const DocumentsPage = () =>
{
    const classes = useDocumentsStyles();
    const { files, status } = useUserSelector(s => s);
    const dispatch = useUserDispatch();

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        for(let file of acceptedFiles) 
        {
            await dispatch(actions.upload(file));
        }
    }, [dispatch])
    const {getRootProps, isDragActive} = useDropzone({onDrop})

    useEffect(() =>
    {
        dispatch(actions.listFiles());
    }, [dispatch])

    return (
        <div className={classes.container}>
             <div 
                className={isDragActive ? classes.activeTable : classes.table} 
                {...getRootProps()}
                onClick={(e) => e.stopPropagation()}
            >
                <Table
                    onClickAdd={() => dispatch(actions.upload(undefined))}
                    onClickLogOut={() => dispatch(actions.logout())}
                    elements={files}
                    onClickElement={(e) => dispatch(actions.download(files.find(f => e.id === f.id)!))}
                    onClickRemoveElement={(e) => dispatch(actions.remove(files.find(f => e.id === f.id)!))}
                    loading={status === 'loading'}
                />
                {
                    isDragActive && <div className={classes.activeOverlay}/>
                }
            </div>
        </div>
       
    )
}

export default DocumentsPage;