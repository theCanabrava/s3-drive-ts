import {createUseStyles} from 'react-jss'
import Pallete from './Pallete';

const useSharedStyles = createUseStyles(
{
  loadingContainer:
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Pallete.FOREGROUND
  }
})

export default useSharedStyles;