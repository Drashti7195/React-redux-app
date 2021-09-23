import React from 'react';
import { connect } from "react-redux";
import {cartProduct} from "../action"

class ViewProduct extends React.Component {
    addItem = () => {
        localStorage.setItem("totalItem", JSON.parse(localStorage.getItem("totalItem")) + 1) 
        const prodArr = [
            ...this.props.cartList,
            this.props.addedProduct
        ]
        this.props.cartProduct(prodArr)
        localStorage.setItem("cartItem", JSON.stringify(prodArr)) 
        this.props.history.push("/")
    }
    
    render() { 
        return (
            <div class="container">

                <header class="section-heading">
                <h3 class="section-title">View Product</h3>
                <span> <a href={() => this.props.history.push("/")}>HOME</a> </span>
                </header>

                
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src={this.props.addedProduct.prodImage} /> </a>
                            <figcaption class="info-wrap">
                            <a href="#" class="title">{this.props.addedProduct.prodTitle}</a>
                            <div class="price mt-1">{this.props.addedProduct.prodRate}</div> 
                            </figcaption>
                            <button onClick={this.addItem}>Add to Cart</button>
                        </div>
                    </div> 
                
                </div> 
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("state  viewe::", state)
    return {
        cartList: state.cart,
        addedProduct: state.product
    };
}

const mapDispatchToProps = dispatch => {
    return {
        cartProduct: (products) => dispatch(cartProduct(products))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
