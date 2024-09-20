import React, {useState} from "react";

export default function AddComponent({handleFormSubmit}) {
    
    const [itemVariable, setItemVariable] = useState("");
    const handleInputValue = (event) => {
        console.log(event.target.name);
        setItemVariable(event.target.value);
    };

    const submitFormEvent = (event)=>{
      event.preventDefault();
      handleFormSubmit(itemVariable);
    }

  return (
    <div>
      <form onSubmit={submitFormEvent}>
        <input type="text" name="inputField" value={itemVariable} onChange={handleInputValue}/>
        <button type="submit" >Add</button>
        
      </form>
    </div>
  );
}
