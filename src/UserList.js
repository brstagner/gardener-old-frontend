import { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Api from "./Api";
import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
// import CompanyCard from "./CompanyCard";

function UserList () {
    const [users, setUsers] = useState([]);

    async function getUsers () {
        let userRes = await Api.getUsers();
        setUsers(userRes);
    }

    // Call getCompanies on empty formData on initial render (get all companies)
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    flexWrap: "wrap",
                }}>
                {users.map(user => (
                    <div key={user.username} style={{ padding: "5px" }}>
                        username: {user.username}<br />
                        email: {user.email}
                    </div>))}
            </div>
        </div>
    );
}

export default UserList;