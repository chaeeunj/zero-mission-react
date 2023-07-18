import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Products from '../components/Products';
import MenuNav from '../components/MenuNav';

function Fashion({ data, setData }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setData]);

  return (
    <>
      <MenuNav menu={'패션'} />
      {data.map((item) => {
        return item.category === "men's clothing" ? (
          <Products key={item.id} item={item} />
        ) : null;
      })}
      {data.map((item) => {
        return item.category === "women's clothing" ? (
          <Products key={item.id} item={item} />
        ) : null;
      })}
    </>
  );
}

Fashion.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Fashion;
