import {createUseStyles} from 'react-jss'
import Pallete from '../shared/Pallete';

const pressets = 
{
    button:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: 96,
        borderRadius: 4,
        borderWidth: 0,
        
        marginLeft: 24,

        fontFamily: 'Open Sans',
        fontWeight: 600,
    }

};

const useDocumentStyles = createUseStyles(
{
    container:
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: Pallete.FOREGROUND,
        borderRadius: 8,
        marginTop: 48,
        width: 900,
    },

    activeContainer:
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: Pallete.FOREGROUND,
        marginTop: 48,
        width: 900,
        borderRadius: 8,
        border: 'solid',
        borderWidth: 2,
        borderColor: Pallete.PRIMARY

    },

    activeOverlay:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Pallete.PRIMARY_ACTIVE + '44',
    },

    tableHeader:
    {
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 24,
        paddingRight: 24,

        height: 48,
        backgroundColor: Pallete.PRIMARY,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },

    headerLabel:
    {
        fontFamily: 'Open Sans',
        fontWeight: 600,
        color: Pallete.FOREGROUND,
        fontSize: 16,
        flex: 1
    },

    button:
    {
        ...pressets.button,

        backgroundColor: Pallete.FOREGROUND,
        height: 36,

        color: Pallete.PRIMARY,
        fontSize: 16,
        
        '&:hover': { backgroundColor: Pallete.BACKGROUND, cursor: 'pointer' },
        '&:active': { backgroundColor: Pallete.BACKGROUND, cursor: 'pointer' }
    },

    tableElementLight:
    {
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 24,
        paddingRight: 24,

        height: 48,
        backgroundColor: Pallete.FOREGROUND,
    },

    tableElementDark:
    {

        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 24,
        paddingRight: 24,

        height: 48,
        backgroundColor: Pallete.FOREGROUND_DARK
    },

    elementLabel:
    {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        color: Pallete.LABEL,
        fontSize: 14,
        flex: 1,
        textDecoration: 'underline',
        
        '&:hover': { textDecoration: 'none', cursor: 'pointer' },
        '&:active': { textDecoration: 'none', cursor: 'pointer' }
    },

    noElementsLabel:
    {
        fontFamily: 'Open Sans',
        fontWeight: 400,
        color: Pallete.LABEL,
        fontSize: 14,
        flex: 1,
        textAlign: 'center'
    },

    tableButton:
    {
        ...pressets.button,
        display: 'flex',

        backgroundColor: Pallete.ACCENT,
        height: 24,

        color: Pallete.FOREGROUND,
        fontSize: 14,
        
        '&:hover': { backgroundColor: Pallete.ACCENT_ACTIVE, cursor: 'pointer' },
        '&:active': { backgroundColor: Pallete.ACCENT_ACTIVE, cursor: 'pointer' }
    },

    tableFooter:
    {
        width: '100%',

        minHeight: 12,
        backgroundColor: Pallete.PRIMARY,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }


})

export default useDocumentStyles;