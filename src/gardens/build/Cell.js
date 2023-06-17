//** Renders a single cell in the visual garden grid */
function Cell ({ cell, handleCellSelect }) {

    return (
        <td
            key={`${cell.row}-${cell.column}`}
            data-row={cell.row} data-column={cell.column}
            onClick={handleCellSelect}
            style={{ border: "2px black solid" }}>
            Plant ID: {cell.plant_id}<br />
            Row: {cell.row}<br />
            Column: {cell.column}
        </td>
    );
}

export default Cell;