import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent({shoppingList}) {
   console.log(shoppingList);
  
    return (
        <div>
            <ol>
                {shoppingList.map((item, index) => {
                    return <ItemComponent key={index} itemValue={item} />;
                })}
            </ol>
        </div>
    );
}