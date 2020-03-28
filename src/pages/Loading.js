import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '1500'
    }
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.loaderContainer}>
             <CircularProgress />
        </div>
    )
};

export default Loading;
