import categories from "../data/categories";
import products from "../data/products";
import productsCategories from "../data/products-categories";
import ProductsCollection from "../helpers/products-collection";


class App {
    private htmlElement: HTMLElement;

    private productsCollection: ProductsCollection;

    constructor(selector:string){
        const foundElement = document.querySelector(selector);

        if(foundElement === null){
            throw new Error(`app leement not found by selevtor ${selector}`)
        }

        if(!(foundElement instanceof HTMLElement)){
            throw new Error(`must be html element`)
        }

        this.htmlElement = foundElement;
        this.productsCollection = new ProductsCollection({
            products,
            categories,
            productsCategories,
        });
        console.log(this.productsCollection);
        
    }

    initialize(){
        this.htmlElement.innerHTML = `<div>cia bus app turinys</div>`;
    }
}

export default App;
