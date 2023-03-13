import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/UI_slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const handleButtonClick = () => {
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={handleButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
