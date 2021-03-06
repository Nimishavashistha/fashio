import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collections-preview/collection-preview.component";
import { selectCollections, selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import './collections-overview.style.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionsProps}) => (
              <CollectionPreview key={id} {...otherCollectionsProps} />
          ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);