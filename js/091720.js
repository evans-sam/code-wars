// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.itemCount % this.itemsPerPage === 0
    ? ~~(this.itemCount() / this.itemsPerPage)
    : ~~(this.itemCount() / this.itemsPerPage) + 1
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {

  return pageIndex >= this.pageCount()
    ? -1
    : pageIndex === this.pageCount() - 1
      ? (this.itemCount() % this.itemsPerPage)
      : this.itemsPerPage
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex >= this.itemCount() || itemIndex < 0
    ? -1
    : ~~(itemIndex / this.itemsPerPage);
}
