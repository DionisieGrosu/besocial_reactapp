import React from 'react';
import PaperComponent from '../components/papers/PaperComponent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
// import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import styles from './feedPageStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function FeedPage(props) {
  const { classes } = props;
  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={3}>
          <PaperComponent title={true} titleText="Profile intro">
            <List className={classes.profileIntroList}>
              <ListSubheader className={classes.profileIntroListTitle}>About me:</ListSubheader>
              <ListItem className={classes.profileIntroText}>
                Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in
                Pier 56.
              </ListItem>
              <ListSubheader className={classes.profileIntroListTitle}>
                Favorites TV Shows:
              </ListSubheader>
              <ListItem className={classes.profileIntroText}>
                Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.
              </ListItem>
              <ListSubheader className={classes.profileIntroListTitle}>
                Favourite Music Bands / Artists:
              </ListSubheader>
              <ListItem className={classes.profileIntroText}>
                Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.
              </ListItem>
            </List>
          </PaperComponent>
          <PaperComponent title={true} titleText="Friends">
            <List>
              <ListItem>
                <Avatar component={Link} to="/profile" />
                <Box component="div" className={classes.FriendsInfoWrap}>
                  <Typography className={classes.FriendsInfoName} component={Link} to="/profile">
                    Bearded Woander
                  </Typography>
                  <Typography className={classes.FriendsInfoMembers}>@brdwonder</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Avatar component={Link} to="/profile" />
                <Box component="div" className={classes.FriendsInfoWrap}>
                  <Typography className={classes.FriendsInfoName} component={Link} to="/profile">
                    Bearded Woander
                  </Typography>
                  <Typography className={classes.FriendsInfoMembers}>@brdwonder</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Avatar component={Link} to="/profile" />
                <Box component="div" className={classes.FriendsInfoWrap}>
                  <Typography className={classes.FriendsInfoName} component={Link} to="/profile">
                    Bearded Woander
                  </Typography>
                  <Typography className={classes.FriendsInfoMembers}>@brdwonder</Typography>
                </Box>
              </ListItem>
            </List>
          </PaperComponent>
        </Grid>
        <Grid item lg={6}>
          <PaperComponent
            post={true}
            photos={true}
            multiple={true}
            image="/loginPageImage.jpg"
            profileImage="/loginPageImage.jpg"
            profileName="James Adams"
            newFriend={true}
            postedTime="12 hours ago"
          >
            Hello
          </PaperComponent>
        </Grid>
        <Grid item lg={3}>
          <PaperComponent title={true} titleText="Last photos">
            <div className={classes.photoCardWrap}>
              <Grid container spacing={2}>
                <Grid item lg={3}>
                  <Card className={classes.photoCard}>
                    <CardMedia
                      className={classes.photo}
                      image="/loginPageImage.jpg"
                      title="Contemplative Reptile"
                    />
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card className={classes.photoCard}>
                    <CardMedia
                      className={classes.photo}
                      image="/loginPageImage.jpg"
                      title="Contemplative Reptile"
                    />
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card className={classes.photoCard}>
                    <CardMedia
                      className={classes.photo}
                      image="/loginPageImage.jpg"
                      title="Contemplative Reptile"
                    />
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card className={classes.photoCard}>
                    <CardMedia
                      className={classes.photo}
                      image="/loginPageImage.jpg"
                      title="Contemplative Reptile"
                    />
                  </Card>
                </Grid>
              </Grid>
            </div>
          </PaperComponent>
          <PaperComponent title={true} titleText="Groups">
            <List>
              <ListItem>
                <Avatar component={Link} to="/profile" />
                <Box component="div" className={classes.FriendsInfoWrap}>
                  <Typography className={classes.FriendsInfoName} component={Link} to="/profile">
                    Bearded Woander
                  </Typography>
                  <Typography className={classes.FriendsInfoMembers}>3 members</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Avatar component={Link} to="/profile" />
                <Box component="div" className={classes.FriendsInfoWrap}>
                  <Typography className={classes.FriendsInfoName} component={Link} to="/profile">
                    Bearded Woander
                  </Typography>
                  <Typography className={classes.FriendsInfoMembers}>3 members</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Avatar component={Link} to="/profile" />
                <Box component="div" className={classes.FriendsInfoWrap}>
                  <Typography className={classes.FriendsInfoName} component={Link} to="/profile">
                    Bearded Woander
                  </Typography>
                  <Typography className={classes.FriendsInfoMembers}>3 members</Typography>
                </Box>
              </ListItem>
            </List>
          </PaperComponent>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(FeedPage);
