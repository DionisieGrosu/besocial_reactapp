const styles = (theme) => ({
  navbur: {
    position: 'fixed',
    display: 'flex',
    width: '100%',
    height: 60,
    backgroundColor: 'var(--header-color)',
    padding: '0 20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1',
    zIndex: '999',
  },
  logo: {
    color: 'white',
    display: 'inline-block',
    fontSize: 30,
    textTransform: 'uppercase',
    fontFamily: 'TitilliumWebBlack, Arial',
  },
  linkButton: {
    textDecoration: 'none',
    outline: 'none',
    color: '#000!impotrant',
  },
  searchInput: {
    display: 'block',
    backgroundColor: 'var(--header-search-color)',
    border: 'none',
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    height: '90%',
    borderRadius: 10,
    paddingLeft: '30px',
    float: 'right',
    '& input': {
      fontFamily: 'RajdhaniRegular, Arial',
      color: '#fff',
      width: '85%',
      transform: 'translateY(4px)',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before ': {
      borderBottom: 'none',
    },
  },
  searchButton: {
    display: 'inline-block',
    position: 'absolute',
    right: 25,
    top: 10,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 10,
    fontSize: 20,
    color: 'var(--icons-color)',
    cursor: 'pointer',
  },
  fullHeaight: {
    height: '100%',
  },
  headerButton: {
    margin: '0 auto',
    width: 40,
    height: 40,
    fontSize: 25,
    color: '#fff',
    border: 'none',
    borderRadius: 20,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '& svg': {
      transform: 'translateY(4px)',
    },
  },
  headerButtons: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-end',
    },
  },
  gridContainer: {
    maxWidth: 'var(--header-container-max-width)',
    margin: 'auto',
  },
  userInfo: {
    marginLeft: 20,
    transform: 'translateY(5px)',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  userName: {
    display: 'block',
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: 18,
    lineHeight: '5px',
  },
  status: {
    fontFamily: 'RajdhaniBold, Arial',
    textTransform: 'uppercase',
    fontSize: 13,
    color: 'var(--icons-color)',
  },
  profileArrow: {
    marginLeft: 20,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  headerProfileLink: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    textDecoration: 'none',
    maxWidth: '230px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  headerSearchBlock: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sideBurToggleButton: {
    height: '100%',
    color: 'var(--icons-color)',
    transition: 'all .5s ease',
    fontSize: '20px',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'transparent',
    },
  },
});

export default styles;
