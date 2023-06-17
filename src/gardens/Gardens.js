import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Api from "../Api";
// import PlantCard from "./PlantCard";

function Gardens () {
    const nav = useNavigate();

    const [gardens, setGardens] = useState([]);

    async function getGardens () {
        let res = await Api.getUserGardens(localStorage.user_id);
        setGardens(res);
    }

    // Call getPlants on initial render (get logged-in user's plants)
    useEffect(() => {
        getGardens();
    }, []);

    return (
        <div>
            <div
                style={{
                    display: 'flex', flexDirection: 'column'
                }}>
                {gardens ? gardens.map(garden => (
                    <Link to={`/gardens/${garden.garden_id}`}>
                        {garden.name}
                    </Link>)) : null}
            </div>
            <button onClick={() => nav("new")}>Add a Garden</button>
        </div>
    );
}

export default Gardens;