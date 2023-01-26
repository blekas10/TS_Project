import Product from "./product";

type Productjoined = Product & {
    categories:string,
};

export default Productjoined;