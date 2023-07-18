import PropTypes from 'prop-types';
import Detail from './Detail';

function Product({ cart, setCart }) {
  return (
    <div>
      <Detail cart={cart} setCart={setCart} />
    </div>
  );
}

Product.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Product;
