import Paper from '@material-ui/core/Paper';
import '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './LoginLogupComponentStyles';
import Typography from '@material-ui/core/Typography';
import TextInputComponent from '../commons/TextInputComponent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from 'react-router-dom';
function Login(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h5" className={classes.loginTitle}>
        Acount login
      </Typography>
      <form>
        <TextInputComponent
          labelText="Email"
          variant="outlined"
          fullWidth={true}
          marginBottom={40}
        />
        <TextInputComponent labelText="Password" variant="outlined" fullWidth={true} />

        <InputLabel className={classes.rememberMeLabel} for="rememberMe">
          <Checkbox color="primary" id="rememberMe" />
          Remember me
        </InputLabel>
        <Button className={classes.loginButton}>Login to your account</Button>
      </form>
      <span>
        Dont have account? You can create{' '}
        <Link exact to="/signup">
          one
        </Link>
      </span>
    </Paper>
  );
}

export default withStyles(styles)(Login);
