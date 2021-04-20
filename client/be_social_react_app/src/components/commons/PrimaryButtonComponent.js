// import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import styles from './PrimaryButtonComponentStyle';
import { withStyles } from '@material-ui/core/styles';
// import theme from './../../themes/buttonThemes/primaryButtonTheme'

function PrimaryButtonComponent(props) {
  const { classes, children, link } = props;
  if (link) {
    return (
      <Link className={`${classes.root} ${classes.fullWidth}`} underline="none">
        {children}
      </Link>
    );
  }
  return <Button className={classes.root}>{children}</Button>;
}

export default withStyles(styles)(PrimaryButtonComponent);
