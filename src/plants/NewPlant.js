import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Col, Input, Label, Button, Alert } from "reactstrap";
import Api from "../Api";
import TrefleApi from "../trefle/Api";
import NewPlantForm from "./NewPlantForm";
import Search from "../trefle/Search";
import "../css/forms.css";

function NewPlant () {

    const nav = useNavigate();

    const [plantData, setPlantData] = useState({ id: undefined });

    const [plants, setPlants] = useState();

    // Select a cell from grid and update corresponding cell in garden object
    const handlePlantSelect = async (e) => {
        e.preventDefault();
        const id = e.target.id;
        const plant = await TrefleApi.getSpecies(id);
        const speciesData = {};
        if (plant.id) speciesData.id = plant.id;
        if (plant.common_name) console.log(plant.common_name);
        if (plant.common_name) speciesData.common_name = plant.common_name;
        if (plant.scientific_name) speciesData.scientific_name = plant.scientific_name;
        if (plant.flower.color) {
            speciesData.one = plant.flower.color[0] || "";
            speciesData.two = plant.flower.color[1] || "";
            speciesData.three = plant.flower.color[2] || "";
        };
        if (plant.growth.bloom_months) {
            plant.growth.bloom_months.map(month =>
                speciesData[`${month}Entry`] = true
            );
        };
        setPlantData(speciesData);
    };

    return (
        <div>
            <h4>Add a Plant to Your Collection</h4>
            <div style={{ display: "flex", justifyContent: "left" }}>
                <div style={{ display: "flex", justifyContent: "left" }}>
                    <NewPlantForm key={plantData.id} plantData={plantData} />
                </div>
                <Search handlePlantSelect={handlePlantSelect} />
            </div>
        </div>
    );
}

export default NewPlant;