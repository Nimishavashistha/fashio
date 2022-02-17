import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = (props) => {
  console.log(props.match);
  const location = useLocation();
  return (
    <div className='shop-page'>
     <CollectionsOverview></CollectionsOverview>
     <Routes>
     <Route
        exact
        path={`${location.pathname}`}
        element={<CollectionsOverview/>}
      />
      {/* <Route
        exact
        path={`${location.pathname}/:collectionId`}
        element={<CollectionPage/>}
      /> */}
     </Routes>
    </div>
  );
};

export default ShopPage;