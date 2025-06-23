import React from "react";
const ButtonList = () => {
    return (
        <div className = "buttons">
            <button>Add Row</button>
            <button>Remove Row</button>
            <button>Add Column</button>
            <button>Remove Column</button>
            <select>
                <option value = "red">Red</option>
                <option value = "blue">Blue</option>
                <option value = "yellow">Yellow</option>
                <option value = "green">Green</option>
            </select>
        </div>
    )
}

export default ButtonList;