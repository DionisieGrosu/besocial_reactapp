import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  socialButton: {
    width: '40px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: (props) => (props?.color ? props.color : 'red'),
    color: '#fff',
    transition: 'transform .5s ease',
    '&:hover': {
      backgroundColor: (props) => (props?.color ? props.color : 'red'),
      transform: 'translateY(-10px)',
    },
  },
});

export default useStyles;
