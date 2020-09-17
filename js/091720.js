
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection
  this.itemsPerPage = itemsPerPage
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

PaginationHelper.prototype.pageCount = function() {
  return this.itemCount % this.itemsPerPage === 0
    ? ~~(this.itemCount() / this.itemsPerPage)
    : ~~(this.itemCount() / this.itemsPerPage) + 1
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {

  return pageIndex >= this.pageCount()
    ? -1
    : pageIndex === this.pageCount() - 1
      ? (this.itemCount() % this.itemsPerPage)
      : this.itemsPerPage
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex >= this.itemCount() || itemIndex < 0
    ? -1
    : ~~(itemIndex / this.itemsPerPage);
}
