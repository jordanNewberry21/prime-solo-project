import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        color: 'slateblue',
        backgroundColor: 'aliceblue',
      },
      header: {
        textAlign: 'center',
      },
      review: {
        margin: 'auto',
      },
      

    }));