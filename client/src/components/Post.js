import React, { useState } from "react";

export default function Form({ onNewPost }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = {
      firstName: firstName,
      lastName: lastName,
    };

    fetch("http://localhost:8000/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
