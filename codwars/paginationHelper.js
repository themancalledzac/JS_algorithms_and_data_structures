// TODO: complete this object/class
// helper
// https://github.com/a1essar/codewars/blob/master/5%20kyu.%20PaginationHelper.md

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
  //   return itemsPerPage % collection.length;
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
// if current page is greater than total page count, or less than 0, return -1

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
    return -1;
  }
  // return (# of items per page) -( ( (current page * items per page) remainder of that divided by the number of items) remainder of that divided by items per page)
  return (
    this.itemsPerPage -
    Math.ceil(
      (((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) %
        this.itemsPerPage
    )
  );
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
    return -1;
  }

  return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
};

// ---------------------------------------------------------------------------------------------------//
//                                                                                                    //
//                                            Other Ways                                              //
//                                                                                                    //
// ---------------------------------------------------------------------------------------------------//

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  return pageIndex < this.pageCount()
    ? Math.min(
        this.itemsPerPage,
        this.collection.length - pageIndex * this.itemsPerPage
      )
    : -1;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
};
