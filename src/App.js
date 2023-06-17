import { useState, useEffect } from 'react';

import Api from './Api';
import TrefleApi from './trefle/Api';
import Routes from "./Routes";

import './css/app.css';

function App () {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();
  // MAKE ERRORS LOCAL? POPUP ON LOGIN PAGE INSTEAD OF REDIRECT?
  const [errors, setErrors] = useState([]);
  const [species, setSpecies] = useState([]);

  // Set user, authentication, user applications, and request errors
  useEffect(() => {
    setCurrentUser(localStorage.currentUser);
    setToken(localStorage.token);
    setErrors([]);
  }, []);

  function clearErrors () {
    setErrors([]);
  }

  /** Login an existing user */
  async function login (user) {
    try {
      const res = await Api.loginUser(user);
      setCurrentUser(user.username);
      setToken(res.token);
      localStorage.setItem("currentUser", user.username);
      localStorage.setItem("user_id", res.user_id);
      localStorage.setItem("token", res.token);
    } catch (errors) {
      setErrors(errors);
    }
  }

  /** Register a new user, login that user */
  async function register (user) {
    try {
      const res = await Api.addUser(user);
      setCurrentUser(user.username);
      setToken(res.token);
      localStorage.setItem("currentUser", user.username);
      localStorage.setItem("user_id", res.user_id);
      localStorage.setItem("token", res.token);
      console.log(res);
      return res;
    } catch (errors) {
      setErrors(errors);
    }
  }

  /** Logout current user, clear state and localStorage */
  const logout = () => {
    setCurrentUser("");
    setToken("");
    localStorage.clear();
    setErrors([]);
  };

  /** Update user info by authorized user */
  async function editProfile (data) {
    try {
      await Api.editUser(localStorage.currentUser, data);
      localStorage.currentUser = data.newUsername;
      setCurrentUser(data.newUsername);
      return "success";
    } catch (errors) {
      setErrors(errors);
      return `error: ${errors}`;
    }
  }

  async function getSpecies (species_id) {
    try {
      let res = await TrefleApi.getSpecies(species_id);
      setSpecies(res);
      return "success";
    } catch (errors) {
      setErrors(errors);
      return `error: ${errors}`;
    }
  }

  return (
    <div className="App">
      <Routes
        login={login}
        logout={logout}
        register={register}
        clearErrors={clearErrors}
        errors={errors}
        editProfile={editProfile}
        species={species}
        getSpecies={getSpecies}
      />
    </div>
  );
}

export default App;
