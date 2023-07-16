import { useEffect } from 'react';
import PropTypes from 'prop-types';

import NavigationBar from '../components/NavigationBar';
import Products from '../components/Products';
import MenuNav from '../components/MenuNav';
import Footer from '../components/Footer';

function Accessory({ data, setData }) {
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
      <NavigationBar />
      <MenuNav menu={'액세서리'} />

      {data.map((item) => {
        return item.category === 'jewelery' ? (
          <Products key={item.id} item={item} />
        ) : null;
      })}
      <Footer />
    </>
  );
}

Accessory.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Accessory;
