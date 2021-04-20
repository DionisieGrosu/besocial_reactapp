// import Button from '@material-ui/core/Button';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { withStyles } from '@material-ui/core/styles';
import styles from './NavBarButtonStyles';

// function onMouseOverHandler(props) {}
// function onMouseOutHandler(props) {}

//NavBarButton-navbarButtonText-84

function NavBarButton(props) {
  const { classes, active } = props;

  return (
    <>
      <button className={`${classes.navbarButton} ${active === true ? classes.activeButton : ''}`}>
        <FaUserAlt className={classes.navbarButtonsIcon} />
        <span className={classes.navbarButtonText}>About</span>
      </button>
    </>
  );
}

export default withStyles(styles)(NavBarButton);
