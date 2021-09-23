import React from 'react';
import { map as _map } from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getProductDetails} from "../action"
import Header from "./header"

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInCart: localStorage.getItem("totalItem") > 0 ? localStorage.getItem("totalItem") : 0
        };
    }
    itemList = () => {
        const prodList = [
            {
                prodImage: "assets/images/items/1.jpg",
                prodTitle: "Product-1",
                prodRate:   249.00
            },
            {
                prodImage: "assets/images/items/2.jpg",
                prodTitle: "Product-2",
                prodRate:   300.00
            },
            {
                prodImage: "assets/images/items/3.jpg",
                prodTitle: "Product-3",
                prodRate:   350.00
            },
            {
                prodImage: "assets/images/items/4.jpg",
                prodTitle: "Product-4",
                prodRate:   150.00
            },
            {
                prodImage: "assets/images/items/5.jpg",
                prodTitle: "Product-5",
                prodRate:   600.00
            }
        ]
        return prodList
    }
    handleViewProduct = (item) => {
        this.props.getProductDetails(item)
        this.props.history.push("/viewProduct")

    }
    render() { 
        const itemList = this.itemList()
        console.log("this props ::", this.props, itemList)
        return (
            <React.Fragment>
                <div class="container">
                <Header itemInCart={this.state.itemInCart} history={this.props.history}/>
                <section class="section-name padding-y-sm">
                    <header class="section-heading">
                    <h3 class="section-title">All Products</h3>
                    </header>
                </section>
                {
                    _map(itemList, (item, k) => {
                    console.log("item ::", item);
                    return (
                        <React.Fragment>
                            <a onClick={() => this.handleViewProduct(item)} class="img-wrap"> <img src={item.prodImage} /> </a>
                            <figcaption class="info-wrap">
                            <a onClick={() => this.handleViewProduct(item)} class="title">{item.prodTitle}</a>
                            <div class="price mt-1">{item.prodRate}</div> 
                            </figcaption>
                        </React.Fragment>
                    )
                    })
                }
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("state ::", state)
}
const mapDispatchToProps = dispatch => {
  return {
    getProductDetails: (details) => dispatch(getProductDetails(details))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));
// export default ProductList;