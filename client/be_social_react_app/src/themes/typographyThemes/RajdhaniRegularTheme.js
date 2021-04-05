import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'RajdhaniBold, Arial',
    fontSize: 20,
    body1: { 
      color: '#ffffff',
      textTransform: 'uppercase',
    },
  }
});

export default theme;