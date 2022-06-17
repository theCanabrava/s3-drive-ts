import { createUseStyles } from 'react-jss'
import { Pallete } from '../shared';

const useLoginStyles = createUseStyles(
{
    '@global':
    {
        html:
        {
            height: '100%',
        },

        body:
        {
            height: '100%',
        },

        '#root':
        {
            minHeight: '100%',
            display: 'flex'
        }
    },

    container:
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
        flex: 1
    },

    box:
    {
        display: 'flex',
        flexDirection: 'column',
        padding: 
        {
            top: 48,
            bottom: 48,

            left: 64,
            right: 64
        },
        backgroundColor: Pallete.FOREGROUND,
        borderRadius: 4
    },

    label:
    {
        fontFamily: 'Open Sans',
        fontWeight: 600,
        color: Pallete.LABEL,
        fontSize: 16,
        marginBottom: 2
    },

    input:
    {
        minWidth: 250,
        fontFamily: 'Open Sans',
        fontWeight: 500,
        fontSize: 14,

        color: Pallete.LABEL,

        padding:
        {
            top: 4,
            bottom: 4,
            left: 8,
            right: 8
        },
        marginBottom: 16,
    },

    button:
    {
        backgroundColor: Pallete.PRIMARY,
        borderWidth: 0,
        borderRadius: 4,

        color: Pallete.FOREGROUND,
        fontWeight: 600,
        fontSize: 16,
        padding:
        {
            top: 8,
            bottom: 8
        },

        '&:hover': { backgroundColor: Pallete.PRIMARY_ACTIVE, cursor: 'pointer' },
        '&:active': { backgroundColor: Pallete.PRIMARY_ACTIVE, cursor: 'pointer' }
    },

    bottomButton:
    {
        backgroundColor: Pallete.PRIMARY,
        borderWidth: 0,
        borderRadius: 4,

        color: Pallete.FOREGROUND,
        fontWeight: 600,
        fontSize: 16,
        padding:
        {
            top: 8,
            bottom: 8
        },
        marginTop: 16,

        '&:hover': { backgroundColor: Pallete.PRIMARY_ACTIVE, cursor: 'pointer' },
        '&:active': { backgroundColor: Pallete.PRIMARY_ACTIVE, cursor: 'pointer' }
    }
})

export default useLoginStyles;