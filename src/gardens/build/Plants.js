import { useNavigate } from "react-router-dom";

// Renders a list of clickable plant divs for selecting information to place in garden grid
function Plants ({ plants, handlePlantSelect }) {
    const nav = useNavigate();
    return (
        <div>
            <div>
                {plants ? plants.map(plant => (
                    <div
                        key={plant.plant_id}
                        data-id={plant.plant_id}
                        onClick={handlePlantSelect}
                        style={{ padding: "5px" }}
                        draggable>
                        Common Name: <a href={`/plants/${plant.plant_id}`}>{plant.common_name}</a><br />
                        Scientific Name: <i>{plant.scientific_name}</i>
                    </div>)) : null}
            </div><br />
            <button onClick={() => nav("/plants/new")}>Add a Plant</button>
        </div >);

}

export default Plants;