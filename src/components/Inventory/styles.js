import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    padding: theme.spacing(4),
    flexGrow: 0,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    color: 'slateblue',
    marginTop: '20px',
  }
}));