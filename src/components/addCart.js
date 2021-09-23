import React from 'react';
import { map as _map, isEmpty as _isEmpty } from "lodash";
import { connect } from "react-redux";
class AddCart extends React.Component {
    render() { 
        const cartList = !_isEmpty(this.props.cartList) ? this.props.cartList : JSON.parse(localStorage.getItem("cartItem"))
        console.log("add item ::", this.props.cartList, JSON.parse(localStorage.getItem("cartItem")), cartList)
        return (
            <div class="container">

            <header class="section-heading">
               <h3 class="section-title">Selected Products</h3>
            </header>

            {
               _map(cartList, (item, k) => {
               console.log("item ::", item);
               return (
                  <React.Fragment>
                     <a class="img-wrap"> <img src={item.prodImage} /> </a>
                     <figcaption class="info-wrap">
                     <a class="title">{item.prodTitle}</a>
                     <div class="price mt-1">{item.prodRate}</div> 
                     </figcaption>
                  </React.Fragment>
               )
               })
            }
            
         </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
   console.log("state  viewe::", state)
   return {
       cartList: state.cart,
   };
}
export default connect(mapStateToProps, null)(AddCart);