import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './MainNavBarStyles';
import Paper from '@material-ui/core/Paper';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBarButton from '../buttons/NavBarButton';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { classes, onClick } = props;
  return (
    <div className={classes.nextButton} onClick={onClick}>
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { classes, onClick } = props;
  return (
    <div className={classes.prevButton} onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
}
function MainNuvBar(props) {
  const { classes } = props;
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerMode: true,
    arrows: true,
    nextArrow: <SampleNextArrow classes={classes} />,
    prevArrow: <SamplePrevArrow classes={classes} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Paper className={classes.navBurPaper}>
        <Carousel
          {...settings}
          className={classes.navBarSlickSlider}
          style={{ height: '100%', textAlign: 'center' }}
        >
          <NavBarButton key={1} active={true} />
          <NavBarButton key={2} />
          <NavBarButton key={3} />
        </Carousel>
      </Paper>
    </>
  );
}

export default withStyles(styles)(MainNuvBar);
