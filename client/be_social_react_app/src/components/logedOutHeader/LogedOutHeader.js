import styles from './logedOutHeaderStyles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PrimaryButtonComponent from '../buttons/PrimaryButtonComponent';
import { Switch, Route, Link } from 'react-router-dom';
function LogedOutHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.navbur}>
      <Typography className={classes.logo}>BeSocial</Typography>
      <Switch>
        <Route path="/signup">
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <PrimaryButtonComponent link={true}>Signin</PrimaryButtonComponent>
          </Link>
        </Route>
        <Route path="/signin">
          <Link to="signup" style={{ textDecoration: 'none' }}>
            <PrimaryButtonComponent link={true}>Signup</PrimaryButtonComponent>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

export default withStyles(styles)(LogedOutHeader);
