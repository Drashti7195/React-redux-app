import React from 'react';

const Header = props => {
    console.log("in header ::", props)
    return (
        <div class="section-header">
            <section class="header-main border-bottom">
                <div class="container">
                <div class="row align-items-center">
                    <div >
                        <div class="widgets-wrap float-md-end">
                            <div class="widget-header  me-3">
                            <a href="#" onClick={() => props.history.push("/addCart")} class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                            <span class="badge badge-pill badge-danger notify">{props.itemInCart}</span>
                            </div>
                        </div> 
                    </div> 
                </div> 
                </div> 
            </section> 
        </div>
    );
    
}


export default Header;