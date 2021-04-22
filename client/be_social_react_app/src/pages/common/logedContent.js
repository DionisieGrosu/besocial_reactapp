import React, { useState } from 'react';
import LogedHeader from '../../components/logedHeader/LogedHeader';
import MainContentHeader from '../../components/commons/MainContentHeader';
import FeedPage from '../feedPage';
import ProfilePage from '../profilePage';
import styles from './logedContentStyles';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideBur from '../../components/sideBur/SideBur';

function LogedContent(props) {
  const { classes } = props;
  const [openedSideBur, setOpenedSideBur] = useState(false);

  function onClickHandler() {
    setOpenedSideBur(!openedSideBur);
  }
  return (
    <>
      <LogedHeader openSideBurHandler={onClickHandler} />
      <SideBur opened={openedSideBur} />
      <div className={classes.container}>
        <MainContentHeader />
        <Switch>
          <Route exact path="/">
            <Redirect to="/feed" />
          </Route>
          <Route exact path="/feed">
            <FeedPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default withStyles(styles)(LogedContent);
