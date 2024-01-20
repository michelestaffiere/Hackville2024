import { useState } from 'react';

function BigThreeValues(){
    let [liftValue,setValue] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValue(values => ({...values,[name]:value}))
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(liftValue);
        alert(`Youw Wifts awe: ${liftValue}`)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>BenchPwess Pwease :3 :
                <input
                    type="text"
                    name ="benchPress"
                    value={liftValue.benchPress || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Sqwat Pwease :3 :
                <input
                    type="text"
                    name ="squat"
                    value={liftValue.squat || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value = "Submit" />
    </form>
    )
}

function Settings() {
    return (
        <div>
        <h1>Anita Max Wynn :3</h1>
        <BigThreeValues />
      </div>
    );
}

export default Settings;