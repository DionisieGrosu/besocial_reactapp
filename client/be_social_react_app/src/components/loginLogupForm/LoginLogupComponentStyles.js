const style = (theme) => ({
  root: {
    width: 400,
    maxWidth: 400,
    borderRadius: 10,
    minHeight: 490,
    textAlign: 'center',
    padding: '0px 70px',
    paddingTop: 64,
    paddingBottom: 40,
    marginBottom: 50,
    [theme.breakpoints.down('xs')]: {
      width: 250,
      maxWidth: 250,
      padding: '0px 40px',
      paddingTop: 64,
    },
  },
  loginTitle: {
    fontFamily: 'RajdhaniMedium, Arial',
    fontSize: 26,
    marginBottom: 80,
  },
  loginButton: {
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: 15,
    width: '100%',
    marginTop: 30,
    padding: '23px 0',
    color: '#fff',
    backgroundColor: 'var(--button-secondary-color)',
    textTransform: 'initial',
    borderRadius: 15,
    transition: 'all .5s ease',
    '&:hover': {
      backgroundColor: 'var(--button-secondary-hover-color)',
    },
  },
  rememberMeLabel: {
    display: 'inline-block',
    fontFamily: 'RajdhaniBold, Arial',
    lineHeight: 1.5,
    cursor: 'pointer',
    float: 'left',
    marginTop: '25px',
  },
});

export default style;
