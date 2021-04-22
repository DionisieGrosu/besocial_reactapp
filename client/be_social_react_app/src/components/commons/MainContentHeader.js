import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './MainContentHeaderStyles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SocialLinkButton from '../buttons/SocialLinkButton';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainNavBar from './MainNavBar';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import SliderArrow from './SliderArrow';

function MainContentHeader(props) {
  const { classes } = props;
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 2,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <header>
        <Paper className={classes.headerPaper}>
          <CardMedia style={{ width: '100%', height: '300px' }} image="/loginPageImage.jpg" />
          <div className={classes.headerProfileInfo}>
            <Grid container className={classes.headerGridContainer}>
              <Grid
                item
                lg={4}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.porfileShortInfo}
              >
                <Grid item lg={4} md={4} sm={4} xs={4} className={classes.porfileShortInfoItem}>
                  <div className={classes.porfileShortInfoItemNumber}>1</div>
                  <div className={classes.porfileShortInfoItemType}>Posts</div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4} className={classes.porfileShortInfoItem}>
                  <div className={classes.porfileShortInfoItemNumber}>2</div>
                  <div className={classes.porfileShortInfoItemType}>Fiends</div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4} className={classes.porfileShortInfoItem}>
                  <div className={classes.porfileShortInfoItemNumber}>4</div>
                  <div className={classes.porfileShortInfoItemType}>Photo</div>
                </Grid>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12} className={classes.headerProfileWrap}>
                <div className={classes.headerProfile}>
                  <Avatar className={classes.mainContentHeaderAvatar} />
                  <Typography className={classes.mainContentHeaderName}>James Spiegel</Typography>
                  <Typography className={classes.mainContentHeaderStatus}>Cawboy</Typography>
                </div>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12} className={classes.socialButtonsWrap}>
                <div className={classes.socialButtons}>
                  <Carousel {...settings} className={classes.slickSlider}>
                    <SocialLinkButton href="https://google.com" key={1} type="facebook" />
                    <SocialLinkButton href="https://google.com" key={2} type="twitter" />
                    <SocialLinkButton href="https://google.com" key={3} type="instagram" />
                    <SocialLinkButton href="https://google.com" key={4} type="diskord" />
                    <SocialLinkButton href="https://google.com" key={5} type="twich" />
                  </Carousel>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </header>
      <MainNavBar />
    </>
  );
}

export default withStyles(styles)(MainContentHeader);
