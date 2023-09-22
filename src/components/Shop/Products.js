import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Products = [
  {
    id: "p1",
    title: "First",
    price: 20,
    description: "The First",
  },
  {
    id: "p2",
    title: "First",
    price: 10,
    description: "The First",
  },
  {
    id: "p3",
    title: "First",
    price: 40,
    description: "The First",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
