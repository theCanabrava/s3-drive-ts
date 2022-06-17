import { Grid } from  'react-loader-spinner'
import Pallete from '../Pallete';
import useSharedStyles from '../useSharedStyles';


const Loading = () => 
{
    const classes = useSharedStyles();

    return (
        <div className={classes.loadingContainer}>
            <Grid
                height="14"
                width="14"
                color={Pallete.PRIMARY}
                ariaLabel='loading'
            />
        </div>
    );
}

export default Loading;