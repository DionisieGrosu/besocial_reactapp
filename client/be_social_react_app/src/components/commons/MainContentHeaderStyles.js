const styles = (theme) => ({
  header: {
    maxWidth: 'var(--container-max-width)',
  },
  headerPaper: {
    widht: '100%',
    minHeight: '440px',
    borderRadius: 10,
    overflow: 'hidden',
  },
  headerProfileInfo: {
    minHeight: '150px',
  },
  headerGridContainer: {
    padding: '0px 40px',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '50px',
    },
  },
  porfileShortInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'RajdhaniBold, Arial',
    marginTop: '50px',
    [theme.breakpoints.down('md')]: {
      order: 2,
      height: '100px',
      marginTop: '120px',
    },
  },
  porfileShortInfoItem: {
    textAlign: 'center',
    display: 'inline-block',
    width: '100%',
    '&:nth-of-type(1)': {
      borderRight: '1px solid var(--light-gray)',
    },
    '&:nth-of-type(2)': {
      borderRight: '1px solid var(--light-gray)',
    },
  },
  porfileShortInfoItemNumber: {
    fontSize: '22px',
  },
  porfileShortInfoItemType: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: 'var(--bold-font-color)',
  },
  mainContentHeaderAvatar: {
    width: '150px',
    height: '150px',
    border: '5px solid #fff',
    cursor: 'pointer',
  },
  headerProfile: {
    position: 'absolute',
    // transform: 'translateY(-110px)',
    top: '-110px',
    margin: 'auto',
  },
  headerProfileWrap: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
  mainContentHeaderName: {
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: '24px',
    marginTop: '10px',
  },
  mainContentHeaderStatus: {
    fontFamily: 'RajdhaniRegular, Arial',
    textTransform: 'uppercase',
    fontSize: '14px',
    textAlign: 'center',
  },
  socialButtonsWrap: {
    // display: 'flex',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    display: 'block',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      order: 3,
    },
  },
  socialButtons: {
    marginTop: '50px',
  },
  headerSliderArrow: {
    marginTop: '20px',
    display: 'none',
  },
  carouselStyles: { textAlign: 'center', '& li': { display: 'inline-block', width: '100%' } },
  slickSlider: {
    textAlign: 'center',
    '& .slick-slide': {
      textAlign: 'center',
      paddingTop: '10px',
      height: '40px',
    },
  },
});

export default styles;
