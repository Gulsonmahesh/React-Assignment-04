import React, {Component, Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProductStore from './store';

class product extends Component {
    constructor(props) {
        super(props);
        this.state = {product : []};
    }
    
    componentDidMount() {
        setTimeout(() => {
          this.setState({product: ProductStore.getProduct()});
        }, 500);
        ProductStore.on("change", ()=> {
          this.setState({product : ProductStore.getProduct()})
        })
    }
    componentWillUnmount() {
        ProductStore.removeAllListeners();
    }
    viewProduct(proName) {
        if(window.confirm(`Are you sure you want to view the details`)) {
            this.props.history.push(`/about/${proName}`);
        }
    }
    render() {
        return (
            <Fragment>
            {
                this.state.product!== undefined && this.state.product.map((item, index) => 
                <tr key={index}><td>{index + 1}</td>
                <td><Link className="nav-link" to={item} onClick={() => this.viewProduct(item.productname)}>{item.productname}</Link></td>
                <td>{item.quantity}</td><td>{item.price}</td></tr>
              )
            }            
            </Fragment>
        )
    }
}

export default withRouter(product);