const styles = {
  navBurPaper: {
    position: 'relative',
    display: 'block',
    widht: '100%',
    height: '78px',
    borderRadius: 10,
    // overflow: 'hidden',
    marginTop: 'var(--marginTop)',
    padding: '0px 40px',

    '& .slick-slide div': {
      textAlign: 'center',
    },
  },
  navBarSlickSlider: {
    position: 'relative',
    '& .slick-slide:nth-of-type(1) button': {
      borderLeft: '1px solid var(--light-gray)',
    },
  },
  nextButton: {
    position: 'absolute',
    right: 0,
    top: '30px',
    color: 'var(--icons-color)',
    transition: 'all .5s ease',
    '&:hover': {
      color: '#000',
    },
  },
  prevButton: {
    position: 'absolute',
    left: 0,
    zIndex: 999,
    top: '30px',
    color: 'var(--icons-color)',
    transition: 'all .5s ease',
    '&:hover': {
      color: '#000',
    },
  },
};

export default styles;
