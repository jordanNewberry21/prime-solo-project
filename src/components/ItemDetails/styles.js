import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '85%',
        backgroundColor: 'aliceblue',
        color: 'slateblue',
      },
      img: {
        margin: 'auto',
        display: 'block',
        width: '90%',
        height: '90%',
        maxWidth: '90%',
        maxHeight: '90%',
      },
      button: {
          marginLeft: '10px',
          display: 'inline',
      }
    }));
