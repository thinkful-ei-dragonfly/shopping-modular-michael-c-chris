'use strict';

const store = (function() {
  let foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  let hideCheckedItems  = false;
  let searchTerm = '';

  function findById(id){
    return items.find(function(el) {
      return el.id === id;
    });
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      let holder = Item.create(name);
      this.items.push(holder);
    } catch(e) {
      throw new Error(`Not good! ${e.message}`);
    }
  }

  function findAndToggleChecked(id) {
    let currentItem = findById(id);
    currentItem.checked = !currentItem.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName)
      findById(id).name = newName;
    } catch(e) {
      throw new Error(` Cannot update name: ${e.message}`);
    }
  }

  function findAndDelete(id) {
    let itemIndex = this.items.findIndex(item => item.id === id);
    console.log(itemIndex);
    this.items.splice(itemIndex, 1);
  }

  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(arg) {
    this.searchTerm = arg;
  }
  return {
    items,
    hideCheckedItems,
    searchTerm,
    foo,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  }
}() );


console.log(store.addItem('Blue Bananas'));

store.findAndDelete(store.items[0].id);

