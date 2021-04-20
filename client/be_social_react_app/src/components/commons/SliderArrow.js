import { withStyles } from '@material-ui/core/styles';
import styles from './SliderArrowStyles';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
function SliderArrow(props) {
  const { classes, type, onClick } = props;
  console.log(props);
  console.log(classes.sliderArrow);
  if (type === 'PREV') {
    return <FaAngleLeft onClick={onClick} className={classes.sliderArrow} />;
  } else {
    return <FaAngleRight onClick={onClick} className={classes.sliderArrow} />;
  }
}

export default withStyles(styles)(SliderArrow);
