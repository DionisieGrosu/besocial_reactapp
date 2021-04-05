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
        Create your account
      </Typography>
      <form>
        <TextInputComponent
          labelText="FirstName"
          variant="outlined"
          fullWidth={true}
          marginBottom={40}
        />
        <TextInputComponent
          labelText="LastName"
          variant="outlined"
          fullWidth={true}
          marginBottom={40}
        />
        <TextInputComponent
          labelText="Email"
          variant="outlined"
          fullWidth={true}
          marginBottom={40}
        />
        <TextInputComponent
          labelText="Password"
          variant="outlined"
          fullWidth={true}
          marginBottom={40}
        />
        <TextInputComponent labelText="Comfirm password" variant="outlined" fullWidth={true} />

        <InputLabel className={classes.rememberMeLabel} for="license">
          <Checkbox color="primary" id="license" />
          License
        </InputLabel>
        <Button className={classes.loginButton}>Register</Button>
      </form>
      <span style={{ display: 'block', marginTop: 15 }}>
        Already have account? You can create{' '}
        <Link exact to="/signin">
          signin
        </Link>
      </span>
    </Paper>
  );
}

export default withStyles(styles)(Login);
