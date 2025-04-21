import React, { useState } from 'react';

const Cities = ()=>{
    let [city,setCity] = useState("")
    function handleChange(e){
        setCity(e.target.value);
    }
    return(
        <div>
            <label htmlFor='cities'>Search cities of India:</label>
            <input id='cities' name="cities" list='city' 
            onChange={handleChange}
            value={city}
            />
            <datalist id='city'>
                <option value="Gwalior"></option>
                <option value="Delhi"></option>
                <option value="Mumbai"></option>
                <option value="Pune"></option>
            </datalist>
        </div>
    )
}

export default Cities