import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const LoaderAnimation = props => {
  return <span>Loading...</span>;
};

const productList = lazy(() => import('./components/productList'));
const viewProduct = lazy(() => import('./components/viewProduct'));
const addCart = lazy(()=> import('./components/addCart'));


const Routes = () => {
  console.log('Routes called');
  return (
    <React.Fragment>
      <Suspense fallback={<LoaderAnimation />}>
        <Switch>
          <Route exact path="/" component={productList} />
          <Route exact path="/viewProduct" component={viewProduct} />
          <Route exect path="/addCart" component={addCart}/>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default withRouter(Routes);