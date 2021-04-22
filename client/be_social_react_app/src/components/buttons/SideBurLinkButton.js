import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './SideBurLinkButtonStyles';
import { withStyles } from '@material-ui/core/styles';

function SideBurLinkButton(props) {
  const { classes, children } = props;
  return <Button className={classes.sideBurButton}>{children}</Button>;
}

export default withStyles(styles)(SideBurLinkButton);
