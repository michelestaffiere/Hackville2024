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
            <label>BenchPress:
                <input
                    type="text"
                    name ="bP"
                    value={liftValue.bP || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Squat:
                <input
                    type="text"
                    name ="squat"
                    value={liftValue.squat || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Deadlift
                <input
                    type="text"
                    name ="dl"
                    value={liftValue.dl || ""}
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
        <h1>Please Enter Your Lift Values</h1>
        <BigThreeValues />
      </div>
    );
}

export default Settings;