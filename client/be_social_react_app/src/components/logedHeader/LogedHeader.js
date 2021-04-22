import styles from './logedHeaderStyles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FaSearch, FaThLarge } from 'react-icons/fa';
import { MdChatBubble, MdNotifications } from 'react-icons/md';
import { AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function LogedHeader(props) {
  const { classes, openSideBurHandler } = props;
  return (
    <div className={classes.navbur}>
      <Grid container className={classes.gridContainer}>
        <Grid item lg={2} md={3} sm={4} xs={6}>
          <Typography className={classes.logo}>BeSocial</Typography>
        </Grid>
        <Grid item lg={1}>
          <Button className={classes.sideBurToggleButton} onClick={openSideBurHandler}>
            <FaThLarge />
          </Button>
        </Grid>
        <Grid item lg={3} md={3} className={classes.headerSearchBlock}>
          <TextField className={classes.searchInput} fullWidth={true} />
          <button className={classes.searchButton}>
            <FaSearch />
          </button>
        </Grid>
        <Grid item container lg={4} md={3} sm={6} xs={6} className={classes.headerButtons}>
          <Grid item lg={3} md={3} sm={3} style={{ textAlign: 'right' }}>
            <button className={classes.headerButton} style={{ transform: 'translateY(2px)' }}>
              <MdChatBubble />
            </button>
          </Grid>
          <Grid item lg={3} md={3} sm={3} style={{ textAlign: 'center' }}>
            <button className={classes.headerButton}>
              <MdNotifications />
            </button>
          </Grid>
          <Grid item lg={3} md={3} sm={3} style={{ textAlign: 'left' }}>
            <button className={classes.headerButton}>
              <AiOutlineUser />
            </button>
          </Grid>
        </Grid>
        <Grid item lg={2} md={3} sm={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/profile" className={classes.headerProfileLink}>
            <Avatar className={classes.avatar} />
            <div className={classes.userInfo}>
              <span className={classes.userName}>James Spiegel</span>
              <span className={classes.status}>Space Cowboy</span>
            </div>
            <AiOutlineDown className={classes.profileArrow} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(LogedHeader);
