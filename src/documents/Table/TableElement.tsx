import React from 'react';
import useDocumentsStyles from '../useDocumentsStyles';

type  TableElementProps =
{
    name: string,
    even: boolean,
    onClickElement: () => void,
    onClickRemove: () => void
}   

const TableElement = ({name, even, onClickElement, onClickRemove}: TableElementProps) =>
{
    const classes = useDocumentsStyles();

    return (
        <div className={even ? classes.tableElementDark : classes.tableElementLight}>
            <p className={classes.elementLabel} onClick={onClickElement}>{name}</p>
            <button className={classes.tableButton} onClick={onClickRemove}>REMOVE</button>
        </div>
    )
}

export default TableElement;