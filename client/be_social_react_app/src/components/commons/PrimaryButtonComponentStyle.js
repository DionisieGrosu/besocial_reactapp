import blue from '@material-ui/core/colors/blue';
const styles = {
  root: {
    fontFamily: 'RajdhaniBold, Arial',
    color: 'white',
    fontSize: 14,
    textTransform: 'initial',
    backgroundColor: blue[300],
    padding: '15px 25px',
    borderRadius: 10,
    transition: 'all .5s ease',
    '&:hover': {
      backgroundColor: blue[200],
    },
  },
};

export default styles;
