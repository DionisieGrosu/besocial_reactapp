import blue from '@material-ui/core/colors/blue';
const styles = {
  root: {
    fontFamily: 'RajdhaniBold, Arial',
    color: 'white',
    fontSize: 14,
    textTransform: 'initial',
    backgroundColor: blue[300],
    padding: '13px 25px',
    borderRadius: 10,
    transition: 'all .5s ease',
    '&:hover': {
      backgroundColor: blue[200],
    },
  },
  fullWidth: {
    minWidth: '100%',
  },
};

export default styles;
