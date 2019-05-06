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
    items.find(function(el) {
      return el['id'] === id;
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

  return {
    items,
    hideCheckedItems,
    searchTerm,
    foo,
    findById,
    addItem,
  }
}() );


console.log(store.addItem('Blue Bananas'));