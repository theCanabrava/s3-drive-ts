import React from 'react';
import useDocumentsStyles from '../useDocumentsStyles';

const NoElements = () =>
{
    const classes = useDocumentsStyles();

    return (
        <div className={classes.tableElementLight}>
            <p className={classes.noElementsLabel}>No Documents Found.</p>
        </div>
    )
}

export default NoElements;