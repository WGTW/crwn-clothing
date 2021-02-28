import { createSelector } from "reselect";

import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key]) // Get values of collections object in array format
)

export const selectCollection = memoize((
  // We memoize the whole selector function
  collectionUrlParam // We return createSelector, this is called a curried function (a function which returns another function.)
) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
