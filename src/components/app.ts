import categories from "../data/categories";
import products from "../data/products";
import productsCategories from "../data/products-categories";
import ProductsCollection from "../helpers/products-collection";
import Table from "./table";


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
            title:"test lent",
            columns: {
                name:'Pavadinimas',
                price: 'kaina',
                price1: '1kaina'
            },
            rowsData: [
                {name:'Pavadinimas', price: '1',price1: 'kaina',},
                {name:'Pavadinimas', price: '2',price1: 'kaina111',},
                {name:'Pavadinimas', price: '3',price1: 'kaina222',},
            ]
        });

        const container = document.createElement('div');
        container.className = 'container my-4';
        container.append(table.htmlElement);

       
        
        this.htmlElement.append(container);
    }
}

export default App;
