/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Form.css";

function Form() {
 const backend_url = "http://localhost:3000/data";


  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  
  function saveUser(e) {
    e.preventDefault(); // prevent the form from submitting
    console.log(user);
    
    axios
      .post(backend_url, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }); // log the user object to the console
  }

  return (
    <div className="form-container">
      <form onSubmit={saveUser}>
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input
          className="form-input"
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Enter your name"
        />

        <label htmlFor="email" className="form-label">
          Email :
        </label>
        <input
          className="form-input"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        <label htmlFor="phone" className="form-label">
          Phone Number:
        </label>
        <input
          className="form-input"
          type="tel"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          placeholder="Enter your phone number"
        />

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
