import React, { useState } from "react";

export default function Form({ onNewPost }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    fetch("http://localhost:8000/api/createPost", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onNewPost();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // rendering
return (
    <form onSubmit={handleSubmit}>
    <label>
        First Name:
        <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
        />
    </label>
    <label>
        Last Name:
        <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
        />
    </label>

      <button type="submit">Submit</button>
    </form>
  );
}

