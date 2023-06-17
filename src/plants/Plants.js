import { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import Api from "../Api";
import Search from "../trefle/Search";
// import PlantCard from "./PlantCard";

function Plants () {
    const nav = useNavigate();

    const [plants, setPlants] = useState([]);

    async function getPlants () {
        let plantsRes = await Api.getUserPlants(localStorage.user_id);
        setPlants(plantsRes);
    }

    // Call getPlants on initial render (get logged-in user's plants)
    useEffect(() => {
        getPlants();
    }, []);

    return (
        <div>
            <div
                style={{
                    // display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "left",
                    // flexWrap: "wrap",
                }}>

                {plants ? plants.map(plant => (
                    <div key={plant.plant_id} style={{ padding: "5px" }} draggable>
                        Common Name: <a href={`/plants/${plant.plant_id}`}>{plant.common_name}</a><br />
                        Scientific Name: <i>{plant.scientific_name}</i>
                    </div>)) : null}
            </div><br />
            {/* <Link to={'/search'}>Search for a Plant</Link> */}
            <button onClick={() => nav("new")}>Add a Plant</button>
        </div>
    );
}

export default Plants;