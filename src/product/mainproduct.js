import React, { Fragment } from 'react'
import Productlist from './productlist';
import { Link } from 'react-router-dom';

const MainProduct = (props) => {
const tableHeader = ['ID', 'Product Name', 'Quantity', 'Price'];
return (
    <Fragment>
    <div className="row">
        <div className="col-xs-1-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card">
                <div className="card-body">
                <h1 className="card-title">Product List ( Using Functional Components )</h1>
                <div className="mt-4 ml-auto">
                    <Productlist header={tableHeader} rows={props.rows}/>
                    <Link name="addproduct" id="addproduct" className="btn btn-primary" to="/addproduct" role="button">Add Product</Link>
                </div>
                </div>
            </div>
        </div>  
        </div>
    </Fragment>
);
}

export default MainProduct;