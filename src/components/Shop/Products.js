import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy = [
  {id: "p1", price: 6, title: "MY FIRST BOOK"},
  {id: "p2", price: 5, title: "MY SECOND BOOK"},
  {id: "p3", price: 8, title: "MY THIRD BOOK"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map(item => {
          return <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description='This is a first product - amazing!'
        />
        })}
      </ul>
    </section>
  );
};

export default Products;
