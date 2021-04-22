import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './PaperComponentStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Avatar } from '@material-ui/core';
import { FaRegHeart } from 'react-icons/fa';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PrimaryButtonComponent from '../buttons/PrimaryButtonComponent';

function PaperComponent(props) {
  const {
    classes,
    title = false,
    titleText = '',
    children,
    post = false,
    photos = false,
    multiple = false,
    profileImage = '',
    profileName = '',
    shared = false,
    posted = false,
    newFriend = false,
    friendName = '',
    postedTime = '',
  } = props;

  return (
    <Paper className={classes.paperBlock}>
      {title == true && titleText != '' ? (
        <Typography className={classes.paperTitle}>{titleText}</Typography>
      ) : (
        ''
      )}
      {post === true ? (
        <Box style={{ display: 'flex' }}>
          <Avatar src={profileImage} />
          <Box className={classes.postProfileInfoWrap}>
            <Typography className={classes.postProfileInfo}>
              {
                <Box component="span" className={classes.postProfileName}>
                  {profileName}
                </Box>
              }{' '}
              {shared === true ? 'shered the post' : ''} {posted === true ? 'posted the post' : ''}{' '}
              {newFriend === true ? `and ${friendName} are friend now` : ''}
            </Typography>
            <Typography className={classes.postedTime}>{postedTime}</Typography>
          </Box>
        </Box>
      ) : (
        ''
      )}
      <Box mt={3} style={{ fontFamily: 'RajdhaniRegular, Arial', fontSize: '14px' }}>
        {children}
      </Box>
      {post === true && photos === true && multiple === true ? (
        <Box className={classes.postAttachment}>
          <Grid container spacing={1}>
            <Grid item lg={6}>
              <Card className={classes.photoCard}>
                <CardMedia
                  className={classes.postFirstPhotos}
                  image="/loginPageImage.jpg"
                  title="Contemplative Reptile"
                ></CardMedia>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card className={classes.photoCard}>
                <CardMedia
                  className={classes.postFirstPhotos}
                  image="/loginPageImage.jpg"
                  title="Contemplative Reptile"
                ></CardMedia>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card className={classes.photoCard}>
                <CardMedia
                  className={classes.postSecondPhotos}
                  image="/loginPageImage.jpg"
                  title="Contemplative Reptile"
                ></CardMedia>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card className={classes.photoCard}>
                <CardMedia
                  className={classes.postSecondPhotos}
                  image="/loginPageImage.jpg"
                  title="Contemplative Reptile"
                ></CardMedia>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card className={classes.photoCard}>
                <CardMedia
                  className={classes.postSecondPhotos}
                  image="/loginPageImage.jpg"
                  title="Contemplative Reptile"
                ></CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Box>
      ) : (
        ''
      )}
      {post === true ? (
        <Box className={classes.postInfo}>
          <Box className={classes.postLikes}>
            <FaRegHeart className={classes.postLikesIcon} />
            <Box component="span" className={classes.postLikesCount}>
              3
            </Box>
          </Box>
          <Box className={classes.postComments}>0 Comments</Box>
        </Box>
      ) : (
        ''
      )}
      {post === true ? (
        <Box className={classes.postLastComments}>
          <List className={classes.postCommentsList}>
            <ListItem className={classes.postComment}>
              <Avatar src={profileImage} />
              <Box className={classes.postCommentInfoWrap}>
                <Typography className={classes.postProfileInfo}>
                  {
                    <Box component="span" className={classes.postProfileName}>
                      {profileName}
                    </Box>
                  }
                </Typography>
                <Typography style={{ fontFamily: 'RajdhaniMedium, Arial', fontSize: '14px' }}>
                  Comment
                </Typography>
                <Typography className={classes.postedTime}>{postedTime}</Typography>
              </Box>
            </ListItem>
          </List>
          <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <PrimaryButtonComponent>All Commnets</PrimaryButtonComponent>
          </Box>
        </Box>
      ) : (
        ''
      )}
    </Paper>
  );
}

export default withStyles(styles)(PaperComponent);
