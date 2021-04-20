import LogedOutHeader from '../components/logedOutHeader/LogedOutHeader';
import Login from '../components/loginLogupForm/LoginComponent';
import Logup from '../components/loginLogupForm/LogupComponent';
import { withStyles } from '@material-ui/core/styles';
import styles from './loginPageStyle';
import Box from '@material-ui/core/Box';
import { Switch, Route } from 'react-router-dom';
function LoginPage(props) {
  const { classes } = props;
  return (
    <>
      <LogedOutHeader />
      <Box
        className={classes.loginWrap}
        display="flex"
        overflow="scroll"
        scrollbarSize={0}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        pt={5}
        minHeight="100vh"
      >
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Logup />
          </Route>
          <Route>
            <Login />
          </Route>
        </Switch>
      </Box>
    </>
  );
}

export default withStyles(styles)(LoginPage);
