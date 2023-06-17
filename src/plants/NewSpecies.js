import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Col, Input, Label, Button, Alert } from "reactstrap";
import Api from "../Api";
import TrefleApi from "../trefle/Api";
import NewPlantForm from "./NewPlantForm";
import "../css/forms.css";

function NewSpecies () {
    const nav = useNavigate();

    const { species_id } = useParams();

    const [plantData, setPlantData] = useState();

    const getPlantData = async () => {
        const res = await TrefleApi.getSpecies(species_id);
        const speciesData = {};
        if (res.common_name) speciesData.common_name = res.common_name;
        if (res.scientific_name) speciesData.scientific_name = res.scientific_name;
        if (res.flower.color) {
            speciesData.one = res.flower.color[0] || "";
            speciesData.two = res.flower.color[1] || "";
            speciesData.three = res.flower.color[2] || "";
        };
        if (res.growth.bloom_months) {
            res.growth.bloom_months.map(month =>
                speciesData[month] = true
            );
        };
        setPlantData({ ...speciesData });
    };

    useEffect(() => {
        getPlantData();
    }, []);

    return (
        <div>
            <h4>Add a Plant to Your Collection</h4>
            <div style={{ display: "flex", justifyContent: "left" }}>
                <div style={{ display: "flex", justifyContent: "left" }}>
                    {plantData ?
                        <NewPlantForm plantData={plantData} /> :
                        <div>...loading</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewSpecies;