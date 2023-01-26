import type Category from "../types/category";
import type Product from "../types/product";
import type ProductCategory from "../types/product-category";

type ProductsCollectionProps = {
    products: Product[],
    categories: Category[],
    productsCategories: ProductCategory[],
};





class ProductsCollection {
    private products: Product[];
    private categories: Category[];
    private productsCategories: ProductCategory[];

    constructor({products, categories, productsCategories}: ProductsCollectionProps) {
        
        this.products = JSON.parse(JSON.stringify(products));
        this.categories = JSON.parse(JSON.stringify(categories));
        this.productsCategories = JSON.parse(JSON.stringify(productsCategories));

    }
}

export default ProductsCollection;

