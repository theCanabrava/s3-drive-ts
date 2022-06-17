import React from 'react';
import TableElement from './TableElement';
import NoElements from './NoElements';
import TableHeader from './TableHeader';
import useDocumentsStyles from '../useDocumentsStyles';
import Loading from '../../shared/components/Loading';

type FileElement =  { id: string, name: string, [key: string]: any };
type TableProps = 
{
    elements: FileElement[],
    loading: boolean,
    onClickAdd: () => void,
    onClickLogOut: () => void,
    onClickElement: (e: FileElement) => void,
    onClickRemoveElement: (e: FileElement) => void
}

const Table = ({elements, onClickAdd, onClickLogOut, onClickElement, onClickRemoveElement, loading}: TableProps) =>
{
    const classes = useDocumentsStyles();

    const renderedElements = elements.length > 0 ? elements.map((e, i) =>
    (
        <TableElement
            key={e.id}
            name={e.name}
            even={i%2 === 0}
            onClickElement={() => onClickElement(e)}
            onClickRemove={() => onClickRemoveElement(e)}
        />
    )) : [<NoElements key={'no-element'}/>];

    return (
        <>
            <TableHeader
                onClickAdd={onClickAdd}
                onClickLogOut={onClickLogOut}
            />
            {
                loading ? 
                <Loading/> :
                renderedElements
            }
            <span className={classes.tableFooter}/>
            
        </>
    )
}

export default Table;