const styles = {
  navbarButton: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    height: '78px',
    textAlign: 'center',
    fontSize: '25px',
    paddingRight: 0,
    paddingLeft: 0,
    color: 'var(--icons-color)',
    borderRadius: 0,
    border: 'none',
    borderRight: '1px solid var(--light-gray)',
    borderBottom: '5px solid transparent',
    backgroundColor: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    transition: 'all .5s ease',
    '&:hover': {
      borderBottom: '5px solid var(--active-color)',
      color: '#000',
    },
    
  },
  navbarButtonsIcon: {
    zIndex: '-1',
  },
  activeButton: {
    color: '#000',
    borderBottom: '5px solid var(--active-color)',
  },
  navbarButtonText: {
    position: 'absolute',
    visibility: 'hidden',
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: '14px',
  },
};

export default styles;
