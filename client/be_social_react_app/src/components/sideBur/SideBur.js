import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './sideBurStyles';
import SideBurLinkButton from '../buttons/SideBurLinkButton';
import { BiNews } from 'react-icons/bi';
import { FaUserFriends, FaUsers } from 'react-icons/fa';

function SideBur(props) {
  const { classes, opened } = props;
  return (
    <>
      <Paper
        className={classes.sideBurPaper}
        style={opened ? { display: 'block' } : { display: 'none' }}
      >
        <SideBurLinkButton>
          <BiNews className={classes.sideBurIcon} /> NewsFeed
        </SideBurLinkButton>
        <SideBurLinkButton>
          <FaUserFriends className={classes.sideBurIcon} /> Friends
        </SideBurLinkButton>
        <SideBurLinkButton>
          <FaUsers className={classes.sideBurIcon} /> Groups
        </SideBurLinkButton>
      </Paper>
    </>
  );
}

export default withStyles(styles)(SideBur);
