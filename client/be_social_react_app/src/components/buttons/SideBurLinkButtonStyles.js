const styles = {
  sideBurButton: {
    width: '100%',
    borderRadius: '10px',
    backgroundColor: '#fff',
    padding: '20px 30px',
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: '14px',
    textTransform: 'initial',
    justifyContent: 'flex-start',
    transition: 'all .5s ease',
    margin: '7px 0',
    '& .active': {
      color: '#fff',
      backgroundColor: 'var(--active-color)',
    },
    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: '3px 5px 20px 0 rgba(94,92,154, .12)',
    },
    '&:hover svg': {
      color: 'var(--active-color)',
    },
  },
};

export default styles;
