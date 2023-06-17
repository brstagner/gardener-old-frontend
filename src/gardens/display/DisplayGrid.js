import DisplayCell from "./DisplayCell";

//** Displays html table as visual representation of garden in a given month */
function DisplayGrid ({ grid, month, leafed, handleCellSelect, plants }) {

    const numRows = grid.dimensions.height;
    const numCols = grid.dimensions.width;
    const rows = [];
    for (let y = 1; y <= numRows; y++) {

        const row = [];

        for (let x = 1; x <= numCols; x++) {

            const cell = grid.rows[y].cells[x];

            // Get appropriate plant information from user's plants with plant_id
            const plant = plants.find(({ plant_id }) => plant_id === cell.plant_id);

            row.push(
                <DisplayCell
                    key={`${cell.row}-${cell.column}`}
                    cell={cell}
                    month={month}
                    leafed={leafed}
                    plant={plant}
                    handleCellSelect={handleCellSelect} />
            );
        }

        rows.push(<tr key={y}>{row}</tr>);
    }
    return <table><tbody>{rows}</tbody></table>;
}

export default DisplayGrid;