//** Component displaying visual cell */
function DisplayCell ({ cell, month, leafed, handleCellSelect, plant }) {

    // Cell color reflects flower color if plant is in bloom  
    const inBloom = plant ? (plant.bloom_months[month]) : null;

    // Cell color is green if not in bloom and not leafed, else brown
    const leafColor = leafed ? 'green' : '#7f7053';

    return (
        <td
            key={`${cell.row}-${cell.column}`}
            data-row={cell.row} data-column={cell.column}
            onClick={handleCellSelect}
            style={{
                border: "2px black solid",
                backgroundColor: inBloom ? `${plant.bloom_color.one}` : leafColor
            }}
        >
            Plant ID: {cell.plant_id}<br />
            Row: {cell.row}<br />
            Column: {cell.column}
        </td>
    );

}

export default DisplayCell;