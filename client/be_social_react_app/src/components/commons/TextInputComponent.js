// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useStyles from './TextInputComponentStyles';
// import theme from './../../themes/buttonThemes/primaryButtonTheme'

function TextInputComponent(props) {
  const { children, marginBottom = 0, labelText, fullWidht = true } = props;
  const classes = useStyles(marginBottom);
  return (
    <TextField className={classes.root} label={labelText} variant="outlined" fullWidth={fullWidht}>
      {children}
    </TextField>
  );
}

export default TextInputComponent;
