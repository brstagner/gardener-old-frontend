import Cell from "./Cell";

//** Renders visual garden grid as html table */
function Grid ({ grid, handleCellSelect }) {

    const numRows = grid.dimensions.height;
    const numCols = grid.dimensions.width;
    const rows = [];
    for (let y = 1; y <= numRows; y++) {

        const row = [];
        for (let x = 1; x <= numCols; x++) {

            const cell = grid.rows[y].cells[x];

            row.push(
                <Cell key={`${cell.row}-${cell.column}`} cell={cell} handleCellSelect={handleCellSelect} />
            );
        }

        rows.push(<tr key={y}>{row}</tr>);
    }
    return <table><tbody>{rows}</tbody></table>;

}

export default Grid;