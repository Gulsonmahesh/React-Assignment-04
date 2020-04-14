import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

const URL = "http://localhost:4000/models";

class ProductStore extends EventEmitter {
    constructor() {
        super();
        setTimeout(() => {
            let data = this.fetchData();
            data.then(Response => {
                this.products = Response;
            })
        }, 0);
    }
    fetchData() {
        return fetch(URL)
        .then(res => res.json())
        .then(res => {return res;})
        .catch(err => console.log(err));
    }
    createProduct(product) {
        const id = this.products.length + 1;
        product.id = id;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, productname: product.productname,
            quantity: product.quantity, price: product.price})
        };
        fetch(URL, requestOptions)
        .then(response => {response.json();
            if( response.status === 201) {
            console.log("New Modal Inserted");
            this.products.push(product);
            this.emit("change");
        }});        
    }
    getProduct() {
        return this.products;
    }

    handleDispactchActions(action) {
        switch (action.type) {
            case 'ADD_PRODUCT':
                this.createProduct(action.product);
            break;
            case 'GET_PRODUCT':
                this.getProduct();
            break;
            default:
                console.log('In default Block');
        }
    }
}

let productStore = new ProductStore();
export default productStore;
dispatcher.register(productStore.handleDispactchActions.bind(productStore));
