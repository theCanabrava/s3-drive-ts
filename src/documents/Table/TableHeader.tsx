import React from 'react';
import useDocumentsStyles from '../useDocumentsStyles';

type TableHeaderProps =
{
    onClickAdd: () => void,
    onClickLogOut: () => void
}
const TableHeader = ({onClickAdd, onClickLogOut}: TableHeaderProps) =>
{
    const classes = useDocumentsStyles();
    
    return (
        <div className={classes.tableHeader}>
            <p className={classes.headerLabel}>Document:</p>
            <button className={classes.button} onClick={() => onClickAdd()}>ADD</button>
            <button className={classes.button} onClick={onClickLogOut}>LOG OUT</button>
        </div>
    )
}

export default TableHeader;