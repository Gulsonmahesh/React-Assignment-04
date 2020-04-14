import React, {Fragment} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import * as actions from './actions';

const Allproduct = () => {
    let history = useHistory();
    function addModel(model) {
        actions.addProduct(model);
        history.push("/products");
    }
    return (
        <Fragment>
            <Formik initialValues={{productname:'', quantity:'', price:''}}
                onSubmit={(values , {setSubmitting}) => {
                setTimeout(() => {
                    setSubmitting(false);
                    if(window.confirm('Are you sure to insert the new Model')){
                        addModel(values);
                    }                    
                }, 500);
            }}

            validationSchema = {
                Yup.object().shape({
                    productname : Yup.string().required('Required'),
                    quantity: Yup.number().required('Required'),
                    price: Yup.number().required('Required').min(4,"Price Must be Greater than 1000")
                })
            }
            >
            {
                props => {
                    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
                    return (                        
                      <Fragment>
                          <form onSubmit={handleSubmit}  autoComplete ='off'>
                            <div className="form-group mt-4">
                                <label htmlFor="productName">Product Name</label>
                                <input type="text" className="form-control" id="productname"
                                onBlur={handleBlur} onChange={handleChange} 
                                value={values.productname} />
                                {errors.productname && touched.productname && (<small className="form-text text-danger">Product Name is Required</small>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity</label>
                                <input type="number" className="form-control" id="quantity"
                                onBlur={handleBlur} onChange={handleChange} min="1"
                                value={values.quantity}
                                />
                                {errors.quantity && touched.quantity && (<small className="form-text text-danger">Quantity Name is Required</small>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price"
                                onBlur={handleBlur} onChange={handleChange} min="1000"
                                value={values.price}
                                />
                                {errors.price && touched.price && (<small className="form-text text-danger">Price Name is Required and Greater than 0</small>)}
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">Submit</button>
                            </form>
                      </Fragment>  
                    );
                }   
            }
            </Formik>
        </Fragment>
    );
}

export default Allproduct;