import categories from "./data/categories";
import products from "./data/products";
import productsCategories from "./data/products-categories";
import ProductsCollection from "./helpers/products-collection";


const productsCollection = new ProductsCollection({
    products,
    categories,
    productsCategories,
});

console.log(productsCollection.all);



