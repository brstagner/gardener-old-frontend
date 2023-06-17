import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/app.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Register from "./user/Register";
import LogIn from "./user/LogIn";
import UserList from "./UserList";
import Profile from "./user/Profile";
import Plants from "./plants/Plants";
import Plant from "./plants/Plant";
import NewPlant from "./plants/NewPlant";
// import NewSpecies from "./plants/NewSpecies";
import Gardens from "./gardens/Gardens";
import GardenBuilder from "./gardens/build/GardenBuilder";
import Display from "./gardens/display/Display";
// import Search from "./trefle/Search";

function FrontRoutes ({

    login,
    logout,
    register,
    errors,
    clearErrors,
    editProfile,

    currentUser,
    token,
    species,
    getSpecies

}) {
    return (
        <BrowserRouter>
            <NavBar
                currentUser={currentUser}
                logout={logout}
                login={login}
            />
            <main>
                {localStorage.currentUser ? (
                    <Routes>
                        <Route path="/" element={<Home errors={errors} />} />
                        <Route path="/profile" element={<Profile clearErrors={clearErrors} editProfile={editProfile} errors={errors} />} />
                        <Route path="/plants" element={<Plants />} />
                        {/* <Route path="/plants/new/:species_id" element={<NewSpecies />} /> */}
                        <Route path="/plants/new" element={<NewPlant />} />
                        <Route path="/plants/:plant_id" element={<Plant />} />
                        <Route path="/gardens" element={<Gardens />} />
                        <Route path="/gardens/new" element={<GardenBuilder method={"post"} />} />
                        <Route path="/gardens/edit/:garden_id" element={<GardenBuilder method={"patch"} />} />
                        <Route path="/gardens/:garden_id" element={<Display />} />
                        {/* <Route path="/search" element={<Search getSpecies={getSpecies} />} /> */}
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home errors={errors} />} />
                        <Route path="/register"
                            element={<Register
                                register={register}
                                errors={errors}
                                clearErrors={clearErrors}
                            />} />
                        <Route path="/login" element={<LogIn login={login} errors={errors} />} />
                        <Route path="/users" element={<UserList errors={errors} />} />
                    </Routes>
                )}
            </main>
        </BrowserRouter>
    );
}

export default FrontRoutes;