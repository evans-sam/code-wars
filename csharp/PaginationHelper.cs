using System;
using System.Collections.Generic;

public class PagnationHelper<T>
{
  // TODO: Complete this class
  
  /// <summary>
  /// Constructor, takes in a list of items and the number of items that fit within a single page
  /// </summary>
  /// <param name="collection">A list of items</param>
  /// <param name="itemsPerPage">The number of items that fit within a single page</param>


  private IList<T> Collection;
  private int ItemsPerPage;
  public PagnationHelper(IList<T> collection, int itemsPerPage)
  {
    Collection = collection;
    ItemsPerPage = itemsPerPage;
  }

  /// <summary>
  /// The number of items within the collection
  /// </summary>
  public int ItemCount
  {
    get
    {
      return Collection.Count;
    }
  }

  /// <summary>
  /// The number of pages
  /// </summary>
  public int PageCount
  {
    get
    {
      return (int)Math.Ceiling((double)ItemCount / (double)ItemsPerPage);
    }
  }

  /// <summary>
  /// Returns the number of items in the page at the given page index 
  /// </summary>
  /// <param name="pageIndex">The zero-based page index to get the number of items for</param>
  /// <returns>The number of items on the specified page or -1 for pageIndex values that are out of range</returns>
  public int PageItemCount(int pageIndex)
  {
    return pageIndex < PageCount && pageIndex >= 0
      ? (int)Math.Min((double)ItemsPerPage, (double)(ItemCount - pageIndex * ItemsPerPage))
      : -1;
  }

  /// <summary>
  /// Returns the page index of the page containing the item at the given item index.
  /// </summary>
  /// <param name="itemIndex">The zero-based index of the item to get the pageIndex for</param>
  /// <returns>The zero-based page index of the page containing the item at the given item index or -1 if the item index is out of range</returns>
  public int PageIndex(int itemIndex)
  {
    return itemIndex < ItemCount && itemIndex >= 0
      ? (int)Math.Floor((double)(itemIndex / ItemsPerPage))
      : -1;
  }
}