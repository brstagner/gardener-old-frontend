import axios from "axios";
import config from "./config/development.json";

const BASE_URL = config.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class.
 * Static class tying together methods used to get/send to to the API.
 */

class Api {
    // REST Methods

    /** General GET method */
    static async request (endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
        const url = `${BASE_URL}${endpoint}`;
        const headers = {
            Authorization: `${localStorage.token}`
        };
        const params = method === "get" ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    /** General POST method */
    static async add (endpoint, data = {}, method = "post") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}${endpoint}`;
        const headers = {
            Authorization: `${localStorage.token}`
        };
        const params = method === "post" ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    /** General PATCH method */
    static async edit (endpoint, data = {}, method = "patch") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}${endpoint}`;
        const headers = { Authorization: `${localStorage.token}` };
        const params = method === "patch" ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API Routes

    // User Routes

    /** Get all users */
    static async getUsers () {
        let res = await this.request(`users`);
        return res.users;
    }

    /** Get details on a user by username. */
    static async getUser (username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    /** Add a new user to database */
    static async addUser (user) {
        const res = await this.add(`auth/register`, user, "post");
        console.log(res);
        return res;
    }

    /** Login a user, get a token */
    static async loginUser (user) {
        const res = await this.add(`auth/token`, user, "post");
        return res;
    }

    /** Update user information */
    static async editUser (username, user) {
        await this.edit(`users/${username}`, user, "patch");
    }

    // Plant Routes

    /** Get all plants */
    static async getAllPlants () {
        let res = await this.request(`plants/all`);
        return res.plants;
    }

    /** Get user's plants */
    static async getUserPlants (user_id) {
        let res = await this.add(`plants/collection`, { user_id }, "post");
        return res.plants;
    }

    /** Get details on a plant by plant_id. */
    static async getPlant (plant_id) {
        let res = await this.request(`plants/${plant_id}`);
        return res.plant;
    }

    /** Add a new plant to database */
    static async addPlant (plant) {
        try {
            await this.add(`plants`, plant, "post");
            return "success";
        }
        catch (errors) {
            return `error: ${errors}`;
        }
    }

    /** Update plant information */
    static async editPlant (plant_id, plant) {
        try {
            await this.edit(`plants/${plant_id}`, plant, "patch");
            return "success";
        }
        catch (errors) {
            return `error: ${errors}`;
        }
    }

    // Garden Routes

    /** Get all gardens */
    static async getAllGardens () {
        let res = await this.request(`gardens/all`);
        return res.gardens;
    }

    /** Get user's gardens */
    static async getUserGardens (user_id) {
        let res = await this.add(`gardens/collection`, { user_id }, "post");
        return res.gardens;
    }

    /** Get details on a garden by garden_id. */
    static async getGarden (garden_id) {
        let res = await this.request(`gardens/${garden_id}`);
        return res.garden;
    }

    /** Add a new garden to database */
    static async addGarden (garden) {
        try {
            await this.add(`gardens`, garden, "post");
            return "success";
        }
        catch (errors) {
            return `error: ${errors}`;
        }
    }

    /** Update garden information */
    static async editGarden (garden_id, garden) {
        // try {
        let res = await this.edit(`gardens/${garden_id}`, { ...garden }, "patch");
        return "success";
        // }
        // catch (errors) {
        //     return `error: ${errors}`;
        // }

    }

}

export default Api;