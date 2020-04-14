import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

function About({match}) {
    let history = useHistory();

    function goHome() {
        history.push("/products");
    }
    return (
        <Fragment>
            <div className="row justify-content-center mt-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4>About : This application provides information about the products.</h4>
                    <hr/>
                    {(match.params.product) && (
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">Product Details</h3>
                        <p className="card-text">Product Name : <span style={{color : 'red',fontSize:  24}}>{match.params.product}</span></p>
                      </div>
                    </div>
                    )}
                    <button  type="button" className="btn btn-link btn-lg mt-2 ml-auto" onClick={goHome}>Back</button>
                </div>
            </div>            
        </Fragment>        
    )
}

export default About;