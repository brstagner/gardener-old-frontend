//** Renders interface for adding/deleting columns/rows from garden object */
function Dimensions ({ height, width, updateGrid }) {

    return (
        < div >
            <h4>Add rows and columns:</h4>
            <p>Height: {height}</p>
            <div className="buttons">
                <button onClick={() => updateGrid("row", "increment")}>+</button>
                <button onClick={() => updateGrid("row", "decrement")}>-</button>
            </div>
            <p>Width: {width}</p>
            <div className="buttons">
                <button onClick={() => updateGrid("column", "increment")}>+</button>
                <button onClick={() => updateGrid("column", "decrement")}>-</button>
            </div>
        </div >
    );
}

export default Dimensions;