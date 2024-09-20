import React, {useState} from 'react'
import AddComponent from './AddComponent';
import ListComponent from './ListComponent';

function ShoppingList() {
  let [shoppingList, setShoppingList] = useState([
    
  ]);

  const handleFormSubmit = ( itemValue) => {
      let tempList = [...shoppingList];
      tempList.push(itemValue);
      setShoppingList(tempList);
  };
  return (
    <div>
        <h1>ShoppingList</h1>
        <AddComponent handleFormSubmit = {handleFormSubmit}/>
        <ListComponent shoppingList ={shoppingList}/>
        </div>
  )
}

export default ShoppingList;