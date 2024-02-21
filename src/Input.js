import './Input.css';
import React from "react";

function Input () {
    return ( 
        <form> 
        <input className="input" type="text" placeholder="Enter Your To-Do Item" /><br />
        <button className="button">Add To TO-DO List</button>
        </form>
     );
}

export default Input ;