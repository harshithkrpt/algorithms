interface Item {
  title: string;
}

class List {
  item: Item;
  next: List;
  constructor(item: Item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  private list: List;
  constructor(title: string) {
    this.list = new List({ title });
  }
  getList = (): List => {
    return this.list;
  };
  searchListItem = (title: string): boolean => {
    let tempList = this.list;
    while (tempList) {
      if (tempList.item.title === title) {
        return true;
      }
      tempList = tempList.next;
    }
    return false;
  };
  insertFirst = (title: string): void => {
    const tempList = new List({ title });
    tempList.next = this.list;
    this.list = tempList;
  };
  insertEnd = (title: string): void => {
    let tempList = this.list;
    while (tempList.next) {
      tempList = tempList.next;
    }
    const newItem = new List({ title });
    tempList.next = newItem;
  };
  deleteListItem = (title: string): boolean => {
    let tempList = this.list;
    let predList = this.list;
    // If List is Empty
    if (!tempList) {
      return false;
    } else if (!tempList.next) {
      //   If Only One Element Exists
      this.list = null;
    }
    // search the element
    while (tempList) {
      // If Element Found
      if (tempList.item.title === title) {
        // If Element is First Element
        if (this.list === tempList) {
          this.list = this.list.next;
        }
        // If Element is Last Element
        if (tempList.next === null) {
          predList.next = null;
        }
        // If Element is Middle Element
        predList.next = tempList.next;
        return true;
      }
      predList = tempList;
      tempList = tempList.next;
    }
    return false;
  };
}
