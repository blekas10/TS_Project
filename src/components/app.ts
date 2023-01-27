import categories from "../data/categories";
import products from "../data/products";
import productsCategories from "../data/products-categories";
import ProductsCollection from "../helpers/products-collection";
import Table from "./table";
import Productjoined from "../types/product-joined"
import stringifyProps, { StringifiedObject } from "../helpers/stringify-props";


type ProductTableRow = StringifiedObject<Required<Productjoined>>;

const JoinedProductToTableRow = ({description, ...props}: Productjoined):ProductTableRow => {
    
    return stringifyProps({
        ...props,
        description: description ?? '---',
    })
};


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
        
        const table = new Table({
            title:"Visi produktai",
            columns: {
                id:"ID",
                title:"title",
                price:"price",
                description:"description",
                categories:"categories",
            },
            rowsData: this.productsCollection.all.map(JoinedProductToTableRow)
        });

        const container = document.createElement('div');
        container.className = 'container my-4';
        container.append(table.htmlElement);

       
        
        this.htmlElement.append(container);
    }
}

export default App;
