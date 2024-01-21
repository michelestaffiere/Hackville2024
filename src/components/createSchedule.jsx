import { useState } from 'react';
import React from 'react';

function CreateSchedule () {
  const [modal,setModal] = useState(false);
  function CreateButton() {
    return (
      <button    
      onClick={modalHandling}>
        +
      </button>
    );
  }
  function modalHandling(){
    if (modal === true){
      setModal(false)
    }
    else {
      setModal(true)
    }
  }

  function MyForm() {
    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>How many Weeks?:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }  

  

    return (
        <div>
        <h1>Create A Schedule</h1>
        <CreateButton />
        {modal === false ? null:
        // Hardcode values in here
        <div>
          <MyForm />
        </div>
        }
      </div>
    );
}


export default CreateSchedule;