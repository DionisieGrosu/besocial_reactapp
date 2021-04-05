import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      fontFamily: 'RajdhaniBold, Arial',
      borderRadius: 15,
      '&:not(.Mui-focused):hover fieldset': {
        borderColor: '#dedeea',
      },
      '& fieldset': {
        border: '1px solid #dedeea',
      },
      '& .Mui-focused': {
        border: 'none',
      },
    },

    '&:after': {
      display: 'none',
    },
    marginBottom: (props) => props,
    borderColor: 'red',
  },
});
export default useStyles;
