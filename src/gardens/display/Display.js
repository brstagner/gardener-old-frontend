import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DisplayGrid from "./DisplayGrid";
import Api from "../../Api";

//** Component for rendering visual garden display with color */
function Display () {

    //
    // INITIAL COMPONENT RENDER:
    //

    // Get garden_id from url
    const { garden_id } = useParams();

    // State for garden object
    const [garden, setGarden] = useState();

    // Get garden info from database
    const getGarden = async () => {
        let res = await Api.getGarden(garden_id);
        setGarden(res);
    };

    // State for user's saved plants
    const [plants, setPlants] = useState([]);

    // Get user's saved plants from database
    const getPlants = async () => {
        let res = await Api.getUserPlants(localStorage.user_id);
        setPlants(res);
    };

    useEffect(() => {
        getGarden();
        getPlants();
    }, []);

    //
    // GRID INTERACTION LOGIC:
    //

    // Show plant information when clicking in cell
    const handleCellSelect = () => { };

    // State for currently displayed month
    const [month, setMonth] = useState();

    // State for whether leaves on plants
    const [leafed, setLeafed] = useState();

    //** Update month/leafed on month click */
    const handleMonth = (e) => {
        const monthPick = e.target.id;
        setMonth(monthPick);
        // UPDATE THIS IF TRELIO API HAS LEAF SET DATES
        ['mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct'].includes(monthPick) ?
            setLeafed(true) :
            setLeafed(false);
    };

    return garden ?
        <div>
            <h4>{garden.name} <Link to={`/gardens/edit/${garden_id}`}>(edit)</Link></h4>
            <DisplayGrid
                grid={garden.grid}
                month={month}
                leafed={leafed}
                handleCellSelect={handleCellSelect}
                plants={plants}
            />

            {/* Inputs for months */}
            <input type="radio"
                className="btn-check" name="month" id="jan" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="jan">Jan</label>
            <input type="radio"
                className="btn-check" name="month" id="feb" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="feb">Feb</label>
            <input type="radio"
                className="btn-check" name="month" id="mar" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="mar">Mar</label>
            <input type="radio"
                className="btn-check" name="month" id="apr" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="apr">Apr</label>
            <input type="radio"
                className="btn-check" name="month" id="may" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="may">May</label>
            <input type="radio"
                className="btn-check" name="month" id="jun" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="jun">Jun</label>
            <input type="radio"
                className="btn-check" name="month" id="jul" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="jul">Jul</label>
            <input type="radio"
                className="btn-check" name="month" id="aug" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="aug">Aug</label>
            <input type="radio"
                className="btn-check" name="month" id="sep" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="sep">Sep</label>
            <input type="radio"
                className="btn-check" name="month" id="oct" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="oct">Oct</label>
            <input type="radio"
                className="btn-check" name="month" id="nov" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="nov">Nov</label>
            <input type="radio"
                className="btn-check" name="month" id="dec" autoComplete="off"
                onClick={handleMonth} />
            <label className="btn btn-outline-primary" htmlFor="dec">Dec</label>
        </div> : null;
}

export default Display;